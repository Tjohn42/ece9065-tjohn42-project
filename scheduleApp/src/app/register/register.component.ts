import { Component, OnInit } from '@angular/core';
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

    this.rs.registerUser(this.username,this.password,this.email).subscribe
    (
      (response)=>
      {
        console.log(response);
        this.exist = "USER CREATED, WELCOME!"
      },
      (error) => {this.exist = "USER EXISTS!"; console.log(error);}
    )
    
    // this.auth.login(this.username, this.password)
    //   .pipe(first())
    //   .subscribe(
    //     result => this.router.navigate(['secure-user']),
    //     err => this.error = 'Could not authenticate'
    //   );
  }


  constructor(private rs : rest) { }

  ngOnInit(): void {
  }

}




