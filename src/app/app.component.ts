import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-searcher';

  constructor(
    private auth: UserService
  ){
    auth.getUserData().subscribe(
      (user) => {
        console.log(user);
      },
      (err) =>{
        console.log(err);
      }
    )
  }
}
