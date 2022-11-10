import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  kalypso!: FormGroup
  submitted=false;
  show = false;
  getdata:any;
  @ViewChild('content') content: any;
  constructor(private builder: FormBuilder,private http:HttpClient,private modalService: NgbModal,private router:Router) { }
  ngOnInit(): void {
    this.kalypso = this.builder.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      phonenumber: ["", [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/)]],
    })
    // this.getMethod()
  }
  openModal(){
    this.modalService.open(this.content);
  }
  next(){
    this.submitted=true;
    // if(this.kalypso.valid){
      this.http.post<any>(`${environment.baseUrl}users`,this.kalypso.value)
      .subscribe(res=>{
        alert("signup Successful");
          // console.log(data);
          this.kalypso.reset();
          this.openModal();
          this.router.navigate(['routing'])
        },err=>{
          alert("something went wrong")
        }
      )
    }
   
  }
  // getMethod(){
  //   this.http.get(environment.baseUrl+`users`)
  //   .subscribe(
  //     data=>{
  //       console.log(data);
  //       this.getdata=data 
  //     },err=>{
  //       console.log(err);
  //     }
  //   )
  // } 
  // open(){
  //  this.show=!this.show
  // }