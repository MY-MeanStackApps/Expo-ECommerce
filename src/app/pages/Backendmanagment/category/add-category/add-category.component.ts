import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendManagementService } from '../../../../services/backend-management.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  action = false;
  formObj = {
    name: '',
    parent: '',
    status: '',
    create_ts: '',
    create_user: '',
    edit_ts: '',
    editedby: '',
    deleted: '',
    deletedby: '',
    id: ''
  }
  seller: any = [];
  constructor(
    private backendSrv: BackendManagementService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];

    if (id == 'new') {
      this.action = true;
    } else {
      this.action = false;
      this.formObj.id = id;
      this.backendSrv.getById(id).subscribe((resp: any) => {
        this.seller = resp.data;
        console.log(resp);
        this.formObj.name = this.seller.name;
        this.formObj.parent = this.seller.parent;
        this.formObj.status = this.seller.status;
      })
    }
  }

  update() {
    console.log(this.formObj)
    if (
      this.formObj.name == '' ||
      this.formObj.parent == '' ||
      this.formObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.backendSrv.update(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Updated successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/backend/category']);
        } else {
          console.log('something went wrong')
        }
      })
    }
  }

  create() {
    console.log(this.formObj)
    if (
      this.formObj.name == '' ||
      this.formObj.parent == '' ||
      this.formObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.backendSrv.create(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Category Created successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/backend/category']);
        } else {
          console.log('something went wrong')
        }
      })
    }
  }

}
