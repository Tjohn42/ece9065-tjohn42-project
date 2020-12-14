import { Component, ViewChild,ElementRef  } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { rest } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: string;
  admin = false;
  resend :boolean = false;

  constructor(private auth: AuthService, private router: Router,private rs : rest) { }

  public submit() {
    localStorage.setItem('Email', this.email);

    console.log(this.email.substring(this.email.indexOf("@")));
    if(this.email.substring(this.email.indexOf("@")) == "@gmail.com")
    {
      alert("Login Using Gmail Button!");
      return
    }
    
    this.auth.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => {
                 
        if(localStorage.getItem("admin") == "1")
        {              
          this.router.navigate(['administrator'])
        }
        else{
          alert("Login Succcessful!");
          this.router.navigate(['secure-user'])
        }
          
      },
        err =>{
          if(err.status ==401){
            this.admin = true;
            this.error = 'This Account has been Suspended, Contact an Administrator: Admin@website.com'
          }
          else if(err.status == 403){
            this.admin = true;
            this.resend = true;
            this.error = 'Please confirm your account with the email that was sent!'

          }
          else{
          this.error = 'User not found, please insure you have the correct credentials'
          }
        }
      );
  }

  public submitGmail() {
    localStorage.setItem('Email', this.email);
    var username = this.email.substring(0, this.email.indexOf("@"));
    console.log(username);
    this.rs.doesExist(this.email).subscribe
    (
      (response) =>{
         if(response.isAdmin == "1"){
           localStorage.setItem('admin', response.isAdmin);
          }else{
            localStorage.setItem('admin', "0");
        }
      },
      (error) => {
        this.rs.registerUserGmail(username,this.email).subscribe
        ( 
          (response)=>
          {
            console.log(response);

          },
          (error) => {console.log(error);}
        )
      }
   ) 
  }

  resendEmail(){

      this.rs.resendEmail(this.email).subscribe
      (
        (response) =>{
          alert("Email Resent!");
          console.log(response);
        },
        (error) => console.log(error)
     )

  }

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
 ngOnInit() {
    this.googleInitialize();
    this.resend = false;
  }

  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '488489254485-k0umpsqlt7l9m9noc97vbd9tjpp2mpr9.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        if(profile.getEmail() && googleUser.getAuthResponse().id_token){
          this.email = profile.getEmail();
          this.submitGmail();
        }
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
