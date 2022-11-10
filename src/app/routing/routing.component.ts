import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  //  this:any
  kalypso!: FormGroup
  submitted=false;
  show = false;
  getdata:any;
  @ViewChild('content') content: any;
  constructor(private builder: FormBuilder,private http:HttpClient,private modalService: NgbModal,private router:Router) { }
  ngOnInit(): void {
    this.kalypso = this.builder.group({
      // fname: ["", Validators.required],
      // lname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      // phonenumber: ["", [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/)]],
    })
    // this.getMethod()
  }
  openModal(){
    this.modalService.open(this.content);
  }
  // next(){
  //   this.submitted=true;
  //   if(this.kalypso.valid){
  //     this.http.post(`${environment.baseUrl}data`,this.kalypso.value)
  //     .subscribe(
  //       data=>{
  //         console.log(data);
  //         this.kalypso.reset();
  //         this.openModal();
  //       },err=>{
  //         console.log(err);
  //       }
  //     )
  //   }
  //   else{
  //     alert("enter input value")
  //   }
  // }
  getMethod(){
    this.submitted=true
     
    this.http.get<any>(`${environment.baseUrl}users`)
  .subscribe(res=>{
   const users = res.find((a:any)=>{
    return a.email === this.kalypso.value.email && a.password ===this.kalypso.value.password
   });
   if(this.kalypso.valid){
    if(users){
      alert("login success");
      this.kalypso.reset();
      this.router.navigate(['dashboard'])
     }
   }
   else{
    alert("user not found");
    this.router.navigate(['about']);
   }
  })
}
}
