import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any = '';
  pwd: any = '';
  remember: any = '';
  form = { email: '', password: '', remember: '' };
  constructor(
    private Auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }

  submit() {
    if (this.form.email === '' || this.form.password === '') {
      this.toastr.error('Please fill all required fields', '', {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      // this.Auth.LoginUser(this.form).subscribe((res: any) => {
      //   console.log(res);
      //   if (res.message === 'success') {
      //     localStorage.setItem('token', res.token);
      //     localStorage.setItem('userid', res.id);
      //     this.router.navigate(['/dashboard']);
      //   } else if (res.message === 'Un Authorized') {
      //     this.toastr.success('Your Credentials is not correct', 'Oops', {
      //       timeOut: 2000,
      //       positionClass: 'toast-top-right',
      //       progressBar: true,
      //       progressAnimation: 'increasing'
      //     });
      //   }
      // });
      localStorage.setItem('token', 'Token123333');
      localStorage.setItem('userid', '123');
      this.router.navigate(['/dashboard']);
    }
  }
}
