import { Layout2Component } from './layout/layout-2/layout-2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts

// import { Layout1Component  } from './layout/layout-1/layout-1.component';
// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { LoginComponent } from './auth/login/login.component';
import { Auth2Guard } from './Guard/auth2.guard';
import { AuthGuard } from './Guard/auth.guard';
import { LoginGuard } from './Guard/login.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateAdminComponent } from './pages/update-admin/update-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellerComponent } from './pages/seller/seller.component';
import { EditSellerComponent } from './pages/seller/edit-seller/edit-seller.component';
import { CategoryComponent } from './pages/Backendmanagment/category/category.component';
import { AddCategoryComponent } from './pages/Backendmanagment/category/add-category/add-category.component';
import { CodedomainComponent } from './pages/Backendmanagment/codedomain/codedomain.component';
import { LinkdomainComponent } from './pages/Backendmanagment/linkdomain/linkdomain.component';
import { AddlinkComponent } from './pages/Backendmanagment/linkdomain/addlink/addlink.component';
import { DomainAddComponent } from './pages/Backendmanagment/codedomain/domain-add/domain-add.component';
import { ComingSoonComponent } from './pages/common/coming-soon/coming-soon.component';
import { ErrorPageComponent } from './pages/common/error-page/error-page.component';
// *******************************************************************************
// Routes

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent , canActivate: [LoginGuard] },
  { path: 'error', component: ErrorPageComponent },


  { path: '', component: Layout2Component  , canActivateChild: [Auth2Guard] , children: [
    { path: 'seller', component: SellerComponent },
    { path: 'seller/:id', component: EditSellerComponent },

  ]},

  { path: '', component: Layout2Component  , canActivateChild: [Auth2Guard] , children: [
    { path: 'comingsoon', component: ComingSoonComponent },
  ]},


  { path: '', component: Layout2Component  , canActivateChild: [Auth2Guard] , children: [
    { path: 'dashboard', component: DashboardComponent },
  ]},

  { path: 'backend', component: Layout2Component  , canActivateChild: [Auth2Guard] , children: [

    { path: 'category', component:  CategoryComponent},
    { path: 'category/:id', component:  AddCategoryComponent},

    { path: 'code_domain', component:  CodedomainComponent},
    { path: 'code_domain/:id', component:  DomainAddComponent},

    { path: 'link', component:  LinkdomainComponent},
    { path: 'link/:id', component:  AddlinkComponent},

  ]},
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
