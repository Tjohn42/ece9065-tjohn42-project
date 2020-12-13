import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rest } from '../rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username: string;
  public password: string;
  public email: string;
  public error: string;
  public exist: string;



  public submit() {
    //console.log(this.username, this.password,this.email);
    console.log(this.username);
    
    if(this.username == null)
    {
      this.exist = "Username must not be empty!"
      return
    }
    else if(this.password==null){
      this.exist = "Password must not be empty!"
      return
    }
    else if( this.email==null){
      this.exist = "Email must not be empty!"
      return
    }

    this.rs.registerUser(this.username,this.password,this.email).subscribe
    ( 
      (response)=>
      {
        console.log(response.text);
        this.exist = "USER CREATED, WELCOME!"
      },
      (error) => {this.exist = "USER ALREADY EXISTS!"; console.log(error);}
    )
    
    // this.auth.login(this.username, this.password)
    //   .pipe(first())
    //   .subscribe(
    //     result => this.router.navigate(['secure-user']),
    //     err => this.error = 'Could not authenticate'
    //   );
  }


  constructor(private rs : rest, private router: Router) { }

  ngOnInit(): void {
  }

}




