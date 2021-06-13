import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CodeDomainService } from '../../../../services/code-domain.service';

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.scss']
})
export class AddlinkComponent implements OnInit {

  action = false;
  formObj = {
    codedomain1: '',
    codedomain_values1: '',
    codedomain2: '',
    codedomain_values2: '',
    status: '',
    create_ts: '',
    create_user: '',
    edit_ts: '',
    editedby: '',
    deleted: '',
    deletedby: '',
    id: ''
  }
  relaitedLink: any = [];
  allDomains: any = [];
  valuesAgainst_Domain1: any = [];
  valuesAgainst_Domain2: any = [];
  constructor(
    private domainSrv: CodeDomainService,
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
      this.domainSrv.getById_RL(id).subscribe((resp: any) => {
        this.relaitedLink = resp.data;
        console.log(resp);
        this.formObj.codedomain1 = this.relaitedLink.codedomain1._id;
        this.formObj.codedomain_values1 = this.relaitedLink.codedomain_values1._id;
        this.formObj.codedomain2 = this.relaitedLink.codedomain2._id;
        this.formObj.codedomain_values2 = this.relaitedLink.codedomain_values2._id;
        this.formObj.status = this.relaitedLink.status;

        this.domainSrv.getAllBydomainId_V(this.relaitedLink.codedomain1._id).subscribe((resp: any) => {
          this.valuesAgainst_Domain1 = resp.data;
        })

        this.domainSrv.getAllBydomainId_V(this.relaitedLink.codedomain2._id).subscribe((resp: any) => {
          this.valuesAgainst_Domain2 = resp.data;
        })

      })
    }

    this.domainSrv.getAll().subscribe((resp: any) => {
      this.allDomains = resp.data;
    })

  }

  onDomainChange1(id){
    this.domainSrv.getAllBydomainId_V(id).subscribe((resp: any) => {
      this.valuesAgainst_Domain1 = resp.data;
    })
  }

  onDomainChange2(id){
    this.domainSrv.getAllBydomainId_V(id).subscribe((resp: any) => {
      this.valuesAgainst_Domain2 = resp.data;
    })
  }

  update() {
    console.log(this.formObj)
    if (
      this.formObj.codedomain1 == '' ||
      this.formObj.codedomain_values1 == '' ||
      this.formObj.codedomain2 == '' ||
      this.formObj.codedomain_values2 == '' ||
      this.formObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.domainSrv.update_RL(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Updated successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/backend/link']);
        } else {
          console.log('something went wrong')
        }
      })
    }
  }

  create() {
    if (
      this.formObj.codedomain1 == '' ||
      this.formObj.codedomain_values1 == '' ||
      this.formObj.codedomain2 == '' ||
      this.formObj.codedomain_values2 == '' ||
      this.formObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.domainSrv.create_RL(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Link Created successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/backend/link']);
        } else {
          console.log('something went wrong')
        }
      })
    }
  }


}
