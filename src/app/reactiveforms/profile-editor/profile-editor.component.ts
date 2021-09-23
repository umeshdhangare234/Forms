import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName : new FormControl(''),
  //   lastName : new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip : new FormControl('')
  //   })
  // });

  profileForm = this.fb.group({
    firstName: [''],
    lastName:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    aliases:this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Jack',
      address:{
        street:'123 street'
      }
    });
  }
}
