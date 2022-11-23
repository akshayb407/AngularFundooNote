import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archiveList: any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }
  getArchiveNotes(){
    this.note.getNotes().subscribe((Response:any)=>{
      this.archiveList=Response;
      this.archiveList.reverse();
      this.archiveList=this.archiveList.filter((Object:any)=>{
        return Object.isArchive==true;
        // return Object.isArchieve==true && Object.isTrash == false;
      })
      console.log("Archive notes ",this.archiveList);
      
    })
  // getArchiveNotes(){
  //   this.note.getNotes().subscribe((response:any)=>{
  //     this.archiveList=response;
  //     // console.log(this.archiveList);
  //     this.archiveList.reverse();
  //     this.archiveList=this.archiveList.filter((object:any)=>{
  //      return object.isArchieve==true;
  //     })
  //     console.log("Archive notes ",this.archiveList);
  //     // this.messageEvent.emit(response)
  //    })
  // } 
  // receiveMessage(event: any) {
  //   this.getArchiveNotes();
  // }} 
  }
}
