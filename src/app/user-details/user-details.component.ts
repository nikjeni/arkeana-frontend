import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userData: any = [];
  constructor(private router: Router, private service: UserServiceService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((res) => {
      this.userData = res['data'];
    })
  }

  addUser() {
    this.router.navigateByUrl('/users/add');
  }
  edituser(data) {
    this.router.navigate(['/users/edit', data._id]);
  }
  deleteuser(data) {
    this.service.deleteUser(data._id).subscribe();
    location.reload();
  }

}
