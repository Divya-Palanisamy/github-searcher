import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { GithubService } from 'src/app/services/github.service';





@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input()
  repoUrl: string ;

  repos=[];
  constructor(
    private github: GithubService,
    private detectChange: ChangeDetectorRef,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    if (this.repoUrl) {
      this.github.getRepos(this.repoUrl).subscribe(
        (repo: []) => {
          this.repos = repo;
          this.detectChange.detectChanges();
        },
        (err) => {
          this.toastr.error("Something is wrong");
          console.log(err);
        }
      )
      
    }
  }

}
