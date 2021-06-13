import { Component, Input, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ion-md-time",
    class: "" ,
  },
  {
    path: "/personalstylist",
    title: "Personal Stylist",
    icon: "ion-ios-person",
    class: "",
  },
  {
    path: "/leads",
    title: "Leads",
    icon: "ion-md-business",
    class: "",
  },
  {
    path: "/accounts",
    title: "Accounts",
    icon: "ion-md-contact",
    class: "",
  },
  {
    path: "/appointments",
    title: "Appointments",
    icon: "ion-md-calendar",
    class: ""
  },
  { path:
    "/measurements",
    title: "Measurements",
    icon: "ion-ios-create",
    class: ""
  },
  {
    path: "/products",
    title: "Products",
    icon: "ion-ios-shirt",
    class: "",
  },
  {
    path: "/orders",
    title: "Orders",
    icon: "ion-ios-cart",
    class: "",
  },
  {
    path: "/case",
    title: "Case",
    icon: "ion-ios-briefcase",
    class: "",
  },
  {
    path: "/note",
    title: "Notes",
    icon: "ion-ios-paper",
    class: "",
  },
  {
    path: "/filters",
    title: "Filters",
    icon: "ion-ios-funnel",
    class: "",
  },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "ion-md-notifications-outline",
    class: "",
  },
  // {
  //   path: "/login",
  //   title: "Logout",
  //   icon: "ion-md-log-out",
  //   class: ""
  // },
  // { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   icon: "nc-caps-small",
  //   class: "",
  // },
  // {
  //   path: "/upgrade",
  //   title: "Upgrade to PRO",
  //   icon: "nc-spaceship",
  //   class: "active-pro",
  // },
];

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block;  }'],
  styleUrls: ['./layout-navbar.component.scss']
})
export class LayoutNavbarComponent {
  public menuItems: any[];
  Name: any;
  LoggedIn_User: any;

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.LoggedIn_User = localStorage.getItem('username');
  }
  isExpanded = false;
  isRTL: boolean;
  downward:boolean =false;
  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') private hostClassMain = true;

  constructor(
    private auth: AuthService,
    private appService: AppService,
    private layoutService: LayoutService,
    private router: Router) {
    this.isRTL = appService.isRTL;
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }
  // array=['dashboard','personal','lead','account','appointment','measurement','product','order','case','note','filter','notify','logout',];
  iconColor;
  mouseLeave(i){
    // // // this.downward =false;
    var x = document.getElementById(i);
    x.style.color="gray";
  }

  mouseEnter(i){
    // console.log(i);
    var x = document.getElementById(i);
    if(i == 0){
     x.style.color="#2f00ff";
    }if(i == 1){
     x.style.color="#0e6107";
    }if(i == 2){
      x.style.color="#ed039b";
     }if(i == 3){
      x.style.color="#1bb589";
     }if(i == 4){
      x.style.color="#00d0ff";
     }if(i == 5){
      x.style.color="crimson";
     }if(i == 6){
      x.style.color="blue";
     }if(i == 7){
      x.style.color="#f71313";
     }if(i == 8){
      x.style.color="indigo";
     }if(i == 9){
      x.style.color="#e3710d";
     }if(i == 10){
      x.style.color="maroon";
     }if(i == 11){
      x.style.color="#ad8f21";
     }if(i == 12){
      x.style.color="#120600";
     }

    // this.downward =true;
  }
//  check = false;
 activeIcon(i){
    // this.check = true;
    var x = document.getElementById(i);
    console.log(i)
    if(i == 0){
      x.style.color="#2f00ff";
     }if(i == 1){
      x.style.color="#0e6107";
     }if(i == 2){
       x.style.color="#ed039b";
      }if(i == 3){
       x.style.color="#1bb589";
      }if(i == 4){
       x.style.color="#00d0ff";
      }if(i == 5){
       x.style.color="crimson";
      }if(i == 6){
       x.style.color="blue";
      }if(i == 7){
       x.style.color="#f71313";
      }if(i == 8){
       x.style.color="indigo";
      }if(i == 9){
       x.style.color="#e3710d";
      }if(i == 10){
       x.style.color="maroon";
      }if(i == 11){
       x.style.color="#ad8f21";
      }if(i == 12){
       x.style.color="#120600";
      }
   }



  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }



}
