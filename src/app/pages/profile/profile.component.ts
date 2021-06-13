import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  submitted = false;
  LoggedIn_User: any;
  formObj = { old: '', new: '', email: '', id: '' , firstName: '' , lastName: '' };
  constructor(
    private AuthSrv: AuthService,
    private toast: ToastrService
  ) { }


  ngOnInit() {

  }

  onSubmit() {

  }

}
