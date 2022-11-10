import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  searchText:any;
  heroes = [
    {id:11, name:'bayapu', country:'india'},
    {id:09, name:'swathi', country:'australia'},
    {id:21, name:'saritha', country:'urope'},
    {id:29, name:'sneha', country:'nepal'},
    {id:999, name:'nati', country:'bangladesh'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event){
    event.preventDefault();
  }

}
