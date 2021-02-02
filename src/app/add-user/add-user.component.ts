import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private service: UserServiceService) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNo: [''],
      email: [''],
    })
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.userForm.value);
    this.service.createUser(this.userForm.value).subscribe();
    this.router.navigateByUrl('/users');
  }

  cancel() {
    this.router.navigateByUrl('/users');
  }

}
