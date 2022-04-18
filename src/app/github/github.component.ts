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

  constructor(private getData: DataService) {
  }

  ngOnInit(): void {
    this.getData.getUser()
      .subscribe(user => {
        this.user=user;
      });

      this.getData.getRepos()
        .subscribe(repos => {
          this.repos=repos;
          console.log(this.repos);
        });
  }

}
