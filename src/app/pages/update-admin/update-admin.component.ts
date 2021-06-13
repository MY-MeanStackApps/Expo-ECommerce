import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {
  id: any;
  formObj = {firstName: '', lastName: '',username: '', id: ''};
  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private AuthSrv: AuthService,
    private toast: ToastrService
  ) { }

  ngOnInit() {

  }

  update() {

  }

}
