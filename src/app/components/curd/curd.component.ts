import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurdService } from 'src/app/services/curd/curd.service';
import { Curd } from './../../models/curd';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent implements OnInit {
  submitted = false;
  btnText = "Submit";
  userForm:FormGroup;
  editid:any;

  Users:any = [];
  udata:Curd[];
  
  constructor(
    public fb:FormBuilder,
    private cs:CurdService
  ) { 
    this.mainForm();
    this.showUsers();
  }

  ngOnInit() {
  }

  mainForm(){
    this.userForm = this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile:["",[Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }

  get fval(){
    return this.userForm.controls;
  }

  //CREATE NEW USER
  onSubmit(){
    this.submitted = true;
    if(this.btnText == "Submit"){
      if(this.userForm.invalid){
        return false;
      }else{
        this.cs.createUser(this.userForm.value).subscribe(
          (res)=>{
            console.log('User successfully created!');
            this.userForm.reset();
            this.showUsers();
          },
          (error)=>{
            console.log(error);
          }
        )
      }
    }else{
      if(this.userForm.invalid){
        return false;
      }else{
        if(window.confirm("Are you sure?")){
          this.cs.updateUser(this.editid, this.userForm.value).subscribe(
            (res)=>{
              console.log('User successfully updated!');
              this.btnText = "Submit";
              this.resetForm();
              this.showUsers();
            },
            (error)=>{
              console.log(error);
            }
          )
        }
      }
    }
  }

  //SHOW ALL USERS
  showUsers(){
    this.cs.getUsers().subscribe((data)=>{
      this.Users = data;
      console.log(this.Users);
    })
  }

  //REMOVE USERS
  removeUser(user, index){
    if(window.confirm('Are you sure?')){
      this.cs.removeUser(user._id).subscribe((data)=>{
        this.Users.splice(index,1);
      })
    }
  }

  //LOAD DATA INTO FORM
  editUser(id){
    this.btnText = "Update";
    this.editid = id;
    this.cs.getUser(id).subscribe(data=>{
      this.userForm.setValue({
        name:data['name'],
        email:data['email'],
        mobile:data['mobile']
      })
    })
  }

  // THIS IS USED FOR REST FORM
  resetForm(value: any = undefined):void{
    this.userForm.reset(value);
    (this as{submitted:boolean}).submitted = false;
  }

}
