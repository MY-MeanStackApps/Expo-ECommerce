import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { ToastrService } from 'ngx-toastr';
import { BackendManagementService } from '../../../services/backend-management.service';
import { CodeDomainService } from '../../../services/code-domain.service';

@Component({
  selector: 'app-codedomain',
  templateUrl: './codedomain.component.html',
  styleUrls: ['./codedomain.component.scss']
})
export class CodedomainComponent implements OnInit {
  searchText = '';
  p = 0;
  alldomain: any = [];
  constructor(
    private codedomainSrv: CodeDomainService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.codedomainSrv.getAll().subscribe((resp: any) => {
      this.alldomain = resp.data;
      console.log(resp);
    })
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
          this.codedomainSrv.delete(id).subscribe((data: any) => {
            console.log(data)
            if (data.message == "success") {
              this.ngOnInit();
              this.toast.success('Deleted successfully', '', {
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
