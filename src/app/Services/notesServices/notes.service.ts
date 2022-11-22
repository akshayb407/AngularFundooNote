import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Httpservice } from '../httpServices/http-service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token : any;

  constructor(private httpService : Httpservice) { 
    this.token = localStorage.getItem('token');

  }

  createNote(reqData : any){
     console.log(reqData)
    let header = {
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('https://localhost:44353/api/Notes/Add', reqData, true, header);
  }

  getNotes(){
    let header = {
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':`Bearer `+this.token
      })
    }
    return this.httpService.getService( 'https://localhost:44353/api/Notes/AllNotes',true,header);
  }

  updateNotes(data:any, noteID:any){
     //console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putservice('https://localhost:44353/api/Notes/Update?NoteId='+noteID,data,true,header);
   }
   ArchiveNotes(data:any ){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putservice('https://localhost:44353/api/Notes/Archive?noteid='+data,{},true,header);
   }
}