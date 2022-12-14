import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  token:any;
  constructor(private httpService :Httpservice) { 
 
  } 

  register(Data : any){
    console.log(Data)
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44353/api/Users/Register', Data, false, header);
  }
   login(Data : any){
    console.log(Data)
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        //'Authorization':'token'
      })
    }
    return this.httpService.postService('https://localhost:44353/api/Users/LoginUser', Data, false, header);
  }
  forgot(Data : any){
    console.log(Data)
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        //'Authorization':'token'
      })
    }
    return this.httpService.postService(`https://localhost:44353/api/Users/ForgetPassword?email=${Data.email}`, Data, false, header);
  }
  reset(Data : any){
    console.log(Data)
    let header = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        //'Authorization':'token'
        //'Authorization':`Bearer ${this.token}
      })
    }
    return this.httpService.postService('https://localhost:44353/api/Users/Reset',Data,false,header);
  }
}
