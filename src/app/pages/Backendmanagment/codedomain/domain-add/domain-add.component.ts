import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CodeDomainService } from '../../../../services/code-domain.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-domain-add',
  templateUrl: './domain-add.component.html',
  styleUrls: ['./domain-add.component.scss']
})
export class DomainAddComponent implements OnInit {
  domainValues: any = [];
  routeId: any;
  action = false;
  formObj = {
    name: '',
    code: '',
    status: '',
    create_ts: '',
    create_user: '',
    edit_ts: '',
    editedby: '',
    deleted: '',
    deletedby: '',
    id: ''
  };

  valueObj = {
    value: '',
    code: '',
    status: '',
    create_ts: '',
    create_user: '',
    edit_ts: '',
    editedby: '',
    deleted: '',
    deletedby: '',
    codedomain: '',
    id: ''
  }
  domain: any = [];
  constructor(
    private domainSrv: CodeDomainService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.routeId = this._route.snapshot.params['id'];

    if (this.routeId == 'new') {
      this.action = true;
    } else {
      this.action = false;
      this.formObj.id = this.routeId;
      this.domainSrv.getById(this.routeId).subscribe((resp: any) => {
        this.domain = resp.data;
        console.log(resp);
        this.formObj.name = this.domain.name;
        this.formObj.code = this.domain.code;
        this.formObj.status = this.domain.status;

        this.domainSrv.getAllBydomainId_V(this.routeId).subscribe((dValues: any) => {
          console.log(dValues)
          this.domainValues = dValues.data;
        })

      })
    }
  }

  update() {
    console.log(this.formObj)
    if (
      this.formObj.name == '' ||
      this.formObj.code == '' ||
      this.formObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.domainSrv.update(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Updated successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/backend/code_domain']);
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
      this.formObj.code == '' ||
      this.formObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.domainSrv.create(this.formObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Code domain Created successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.router.navigate(['/backend/code_domain']);
        } else {
          console.log('something went wrong')
        }
      })
    }
  }

  createValue() {
    this.valueObj.codedomain = this.routeId;
    if (
      this.valueObj.value == '' ||
      this.valueObj.code == '' ||
      this.valueObj.status == ''
    ) {
      this.toastr.error('Please fill all required fields', 'error', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.domainSrv.create_V(this.valueObj).subscribe((resp: any) => {
        if (resp.message == 'success') {
          this.toastr.success('Created successfully', '', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.domainSrv.getAllBydomainId_V(this.routeId).subscribe((dValues: any) => {
            this.domainValues = dValues.data;
          })
          this.valueObj.value = '';
          this.valueObj.code = '';
          this.valueObj.status = '';
          document.getElementById('closeModal').click();
        } else {
          console.log('something went wrong')
        }
      })
    }
  }

  delete(id) {
    console.log(id);
    swal("Are you sure, you want to delete it?", {
      icon: "warning",
      closeOnClickOutside: false,
      closeOnEsc: false,
      buttons: {

        catch: {
          text: "No",
          value: "catch",
          closeModal: false,
        },
        yes: {
          closeModal: false,
        }

      },
    })
      .then((value) => {
        if (value === 'yes') {
          this.domainSrv.delete_V(id).subscribe((data: any) => {
            console.log(data)
            this.domainSrv.getAllBydomainId_V(this.routeId).subscribe((dValues: any) => {
              console.log(dValues)
              this.domainValues = dValues.data;
            })

            if (data.message == "success") {
              this.ngOnInit();
              this.toastr.success('Deleted successfully', '', {
                timeOut: 2000,
                positionClass: 'toast-top-right',
                progressBar: true,
                progressAnimation: 'increasing'
              });
              swal.close();
              swal('Delete', '', 'success');
            } else {
              console.log('something went wrong')
            }
          });

        }
        else swal.close();
      });
  }


}
