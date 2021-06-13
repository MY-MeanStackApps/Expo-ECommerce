import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './Guard/auth.guard';
import { Auth2Guard } from './Guard/auth2.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginGuard } from './Guard/login.guard';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QRCodeModule } from 'angularx-qrcode';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { NgSelect2Module } from 'ng-select2';
import { NgSelectModule } from '@ng-select/ng-select';

import { DatePipe } from '@angular/common';
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateAdminComponent } from './pages/update-admin/update-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellerService } from './services/seller.service';
import { EditSellerComponent } from './pages/seller/edit-seller/edit-seller.component';
import { CategoryComponent } from './pages/Backendmanagment/category/category.component';
import { AddCategoryComponent } from './pages/Backendmanagment/category/add-category/add-category.component';
import { CodedomainComponent } from './pages/Backendmanagment/codedomain/codedomain.component';
import { LinkdomainComponent } from './pages/Backendmanagment/linkdomain/linkdomain.component';
import { AddlinkComponent } from './pages/Backendmanagment/linkdomain/addlink/addlink.component';
import { DomainAddComponent } from './pages/Backendmanagment/codedomain/domain-add/domain-add.component';
import { BackendManagementService } from './services/backend-management.service';
import { CodeDomainService } from './services/code-domain.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';
import { ComingSoonComponent } from './pages/common/coming-soon/coming-soon.component';
import { ErrorPageComponent } from './pages/common/error-page/error-page.component';


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    Page2Component,
    LoginComponent,
    ProfileComponent,
    UpdateAdminComponent,
    DashboardComponent,
    SellerComponent,
    EditSellerComponent,
    CategoryComponent,
    AddCategoryComponent,
    CodedomainComponent,
    LinkdomainComponent,
    AddlinkComponent,
    DomainAddComponent,
    ComingSoonComponent,
    ErrorPageComponent
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    // App
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    DragulaModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    SelectDropDownModule,
    QRCodeModule,
    NgSelectModule,
    FormsModule,
    NgSelect2Module,
    Ng2ChartsModule,
    PerfectScrollbarModule,
  ],

  providers: [
    Title,
    AppService,
    AuthService,
    SellerService,
    AuthGuard,
    Auth2Guard,
    LoginGuard,
    DatePipe,
    NgxNavigationWithDataComponent,
    BackendManagementService,
    CodeDomainService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
