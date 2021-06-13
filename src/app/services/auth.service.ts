import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseurl;

  constructor(private http:HttpClient) {}

  CreateUser(data){
    return this.http.post(this.baseUrl + '/users/create' , data);
  }

  LoginUser(data){
    return this.http.post(this.baseUrl + '/users/signin' , data);
  }

  getAlladmins(){
    return this.http.get(this.baseUrl + '/users/admin');
  }

  delete(id){
    return this.http.delete(this.baseUrl + '/users/'+id);
  }

  updateAdmin(data){
    return this.http.post(this.baseUrl + '/users/updateAdmin' , data);
  }

  getadminbyId(data){
    return this.http.get(this.baseUrl + '/users/adminbyid/'+data);
  }
  getaccountbyId(data){
    return this.http.get(this.baseUrl + '/users/adminbyid/'+data);
  }

  dashboard(id) {
    return this.http.get(this.baseUrl + '/users/dashboard/'+id);
  }

  updatSuperAdmin(data) {
    return this.http.post(this.baseUrl + '/users/updateSudAdmin', data);
  }

  NewPassword(data) {
    return this.http.post(this.baseUrl + '/users/NewPassword', data);
  }

  SubAdmin(data) {
    return this.http.post(this.baseUrl + '/users/create/subAdmin', data);
  }

  getAllSubadmins(id) {
    return this.http.get(this.baseUrl + '/users/getAll/subAdmin/' + id);
  }

  accountowner() {
    return this.http.get(this.baseUrl + '/users/accountowner/users');
  }

  onlyAdmin() {
    return this.http.get(this.baseUrl + '/users/onlyAdmin');
  }

}
