import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { ToastrService } from 'ngx-toastr';
import { BackendManagementService } from '../../../services/backend-management.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  searchText = '';
  p = 0;
  allCategories: any = [];
  constructor(
    private backendSrv: BackendManagementService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.backendSrv.getAll().subscribe((resp: any) => {
      this.allCategories = resp.data;
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
          this.backendSrv.delete(id).subscribe((data: any) => {
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
