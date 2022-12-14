import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() displayicons = new EventEmitter<string>();
  noteArray:any;

  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {

    this.notes.getNotes().subscribe((response: any) => {
      //console.log(response);
      this.noteArray = response;
      this.noteArray = this.noteArray.reverse()
      console.log(this.noteArray)
      this.noteArray = this.noteArray.filter((object: any) => {
        return object.isArchive === false && object.isTrash===false;
      })
      console.log(this.noteArray)
    })
  }
  receiveMeassage(e: any) {
    console.log(e);
    this.getAllNotes();
  }
  autotakeenote(event:any){
    console.log(event);
    this.getAllNotes();
  }
  autodispalay(event:any){
    console.log(event);
    
    this.getAllNotes();
  }
  autoarchive(event:any){
    console.log(event);
    this.getAllNotes();
  }
  autounarchive(event:any){
    console.log(event);
    this.getAllNotes();
  }
  iconrefresh(event:any){
    console.log(event);
    this.getAllNotes();
  }
}
