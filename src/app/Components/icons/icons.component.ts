import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notesServices/notes.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any;
  @Output() displayicons = new EventEmitter<string>();
  @Output() refreshcolor=new EventEmitter<any>();
  @Output() trashrefresh=new EventEmitter<any>();
  @Output() archiverefresh=new EventEmitter<any>(); 
  @Output() unarchiverefresh=new EventEmitter<any>();

  isArchieve: boolean = false;
  isTrash: boolean = false;
  colorArray = [{ colorCode: "Red" },
  { colorCode: "Orange" },
  { colorCode: "Yellow" },
  { colorCode: "Green" },
  { colorCode: "Teal" },
  { colorCode: "Blue" },
  { colorCode: "Purple" },
  { colorCode: "Pink" },
  { colorCode: "Brown" },
  { colorCode: "Gray" },
  { colorCode: "White" },
  { colorCode: "olive" }];
  noteListId: any;

  constructor(private note: NotesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let component = this.route.snapshot.component;
    if (component == TrashComponent) {
      this.isTrash = true;
    }
    if (component == ArchiveComponent) {
      this.isArchieve = true;
    }
  }
  onArchive() {
    let reqData = {
      NoteID: [this.noteObject.noteID],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note Archived Successfully", response);
      this.archiverefresh.emit(response);
      console.log(response)
    })
  }
  onUnArchievenote() {

    this.note.ArchiveNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log(response);
      //window.location.reload();
      this.unarchiverefresh.emit(response);
    })
  }
  selectColor(color: any) {
    this.noteListId = this.noteObject.color = color;
    let reqData = {
      noteID: this.noteObject.noteID,
      color: color,
    };
    console.log("color", reqData)
    this.note.NotesColor(reqData).subscribe((response: any) => {
      console.log(response);

    })
  }
  onTrash() {
    let reqData = {
      noteID: [this.noteObject.noteID],
    }
    console.log(reqData)
    this.note.TrashNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note trash Successfully", response);
      //window.location.reload()
      this.trashrefresh.emit(response);
      console.log(response)
    })
  }
  onDelete() {
    let reqData = {
      noteID: [this.noteObject.noteID],
    }

    this.note.DeleteNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log("Note trash Successfully", response);
      console.log(reqData)
      //window.location.reload();
      this.trashrefresh.emit(response);
    })
  }
  onRestore() {

    this.note.TrashNotes(this.noteObject.noteID).subscribe((response: any) => {
      console.log(response);


    })
  }
}





