import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  id;
  constructor(private router: Router, private routes: ActivatedRoute, private fb: FormBuilder, private service: UserServiceService) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNo: [''],
      email: [''],
    })
  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');
    this.service.getAllUsers().subscribe((result) => {
      let foundData = result['data'].find((val, ind) => val._id == this.id);
      this.userForm.patchValue(foundData);
    })
  }

  submit() {
    let obj = { _id: this.id, ...this.userForm.value };
    this.service.updateUser(obj).subscribe((res) => console.log('user', res));
    this.router.navigateByUrl('/users');
  }

  cancel() {
    this.router.navigateByUrl('/users');
  }
}
