import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;
  constructor(
    private auth: UserService,
    private router: Router,
    private toastr: ToastrService,
    ) {

      auth.getUserData().subscribe(
        (user) => {
          this.email = user?.email;
        }
      );

    }

  ngOnInit(): void {
  }

  async signOut(){
    try{
      const a  = await this.auth.logout();
      this.router.navigateByUrl('/signin');
      this.email=null;
    }catch(error){
      this.toastr.error("Something is wrong");
    }
  }

}
