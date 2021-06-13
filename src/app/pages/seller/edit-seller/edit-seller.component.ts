import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.scss']
})
export class EditSellerComponent implements OnInit {

  formObj = {
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    mobile: '',
    id: ''
  }
  seller: any = [];
  constructor(
    private sellerSrv: SellerService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this.formObj.id = id;
    this.sellerSrv.getById(id).subscribe((resp: any) => {
      this.seller = resp.data;
      console.log(resp);
      this.formObj.firstname = this.seller.firstname;
      this.formObj.lastname = this.seller.lastname;
      this.formObj.middlename = this.seller.middlename;
      this.formObj.email = this.seller.email;
      this.formObj.mobile = this.seller.mobile;
      this.formObj.firstname = this.seller.firstname;
    })
  }

  update() {
    // updateIndividual
    if (
      this.formObj.firstname == '' ||
      this.formObj.middlename == '' ||
      this.formObj.lastname == '' ||
      this.formObj.mobile == '' ||
      this.formObj.email == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.sellerSrv.updateIndividual(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Prospect Profile Updated successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/seller']);
        } else {
          console.log('something went wrong')
        }
      })
    }
  }

}
