import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getUser(name: string){
    return this.httpClient.get(`https://api.github.com/users/${name}`);
  }

  getRepos(url: string){
    return this.httpClient.get(url);
  }
}
