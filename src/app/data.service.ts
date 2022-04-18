import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private username = 'b3nzuk3';

  constructor(private http: HttpClient) {
    console.log('run for your life')
  }

  // getUser(){
  //   return this.http.get('https://api.github.com/users/'+this.username).map(res => res.json()) ;
  // }



}
