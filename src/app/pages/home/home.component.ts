import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user =null;
  username: string;
  error = null;
  constructor(
    private githubService: GithubService,
    private detectChange: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  findUser(){
    this.githubService.getUser(this.username).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.detectChange.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = "UserNot Found";
        this.detectChange.detectChanges();
      }
    )
  }
  

}
