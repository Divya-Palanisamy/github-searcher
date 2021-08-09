import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const {email, password} = f.form.value;
    this.auth.login(email, password)
    .then(
      (res) => {
        this.router.navigateByUrl('/home');
        this.toastr.success("SignIn Success");
      }
    )
    .catch(
      (err) => {
        console.log(err);
        this.toastr.error("SignIn Failed");
      }
    )
  }

}
