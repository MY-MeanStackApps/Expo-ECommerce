import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CodeDomainService } from '../../../services/code-domain.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-linkdomain',
  templateUrl: './linkdomain.component.html',
  styleUrls: ['./linkdomain.component.scss']
})
export class LinkdomainComponent implements OnInit {

  searchText = '';
  p = 0;
  allRelaitedDomain: any = [];
  constructor(
    private codedomainSrv: CodeDomainService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.codedomainSrv.getAllByRelaited().subscribe((resp: any) => {
      this.allRelaitedDomain = resp.data;
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
          this.codedomainSrv.delete_RL(id).subscribe((data: any) => {
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
