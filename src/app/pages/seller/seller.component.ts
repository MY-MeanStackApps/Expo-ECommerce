import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import swal from 'sweetalert';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  searchText = '';
  p = 0;
  allSeller: any = [];
  constructor(
    private sellerSrv: SellerService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.sellerSrv.getAll().subscribe((resp: any) => {
      this.allSeller = resp.data;
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
          this.sellerSrv.delete(id).subscribe((data: any) => {
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
