import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Output()messageEvent = new EventEmitter<any>();
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
      this.messageEvent.emit(Response)
    })   
  }
  recivemsg(event:any){
    console.log(event);
    this.getArchiveNotes();
}}
