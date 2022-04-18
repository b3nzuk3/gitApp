import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user;
  repos;
  username;

  constructor(private getData: DataService) {
    this.user = false
  }


  ngOnInit(): void {

  }

  search() {
    this.getData.updateUsername(this.username);
    this.getData.getUser()
      .subscribe(user => {
        this.user = user;
        console.log(this.user)
      });

    this.getData.getRepos()
      .subscribe(repos => {
        this.repos = repos;
        console.log(this.repos);
      });
  }


}
