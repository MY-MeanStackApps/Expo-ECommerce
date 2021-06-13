import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodeDomainService {


  baseUrl = environment.baseurl;

  constructor(private http: HttpClient) { }

  //  This section stands for codedomain
  getAll() {
    return this.http.get(this.baseUrl + '/codedomain/getAll');
  }

  delete(id) {
    return this.http.delete(this.baseUrl +'/codedomain/'+ id);
  }

  getById(id) {
    return this.http.get(this.baseUrl +'/codedomain/'+ id);
  }

  update(data) {
    return this.http.post(this.baseUrl + '/codedomain/update', data);
  }

  create(data) {
    return this.http.post(this.baseUrl + '/codedomain/create', data);
  }

  //  This section stands for codedomainValues
  getAllBydomainId_V(domainId) {
    return this.http.get(this.baseUrl + '/codedomain/values/getAll/'+domainId);
  }

  delete_V(id) {
    return this.http.delete(this.baseUrl +'/codedomain/values/'+ id);
  }

  getById_V(id) {
    return this.http.get(this.baseUrl +'/codedomain/values/'+ id);
  }

  update_V(data) {
    return this.http.post(this.baseUrl + '/codedomain/values/update', data);
  }

  create_V(data) {
    return this.http.post(this.baseUrl + '/codedomain/values/create', data);
  }



  //  This Section stands for   Related Link Code Domains

  getAllByRelaited() {
    return this.http.get(this.baseUrl + '/relaited/codedomain/getAll');
  }

  delete_RL(id) {
    return this.http.delete(this.baseUrl +'/relaited/codedomain/'+ id);
  }

  getById_RL(id) {
    return this.http.get(this.baseUrl +'/relaited/codedomain/'+ id);
  }

  update_RL(data) {
    return this.http.post(this.baseUrl + '/relaited/codedomain/update', data);
  }

  create_RL(data) {
    return this.http.post(this.baseUrl + '/relaited/codedomain/create', data);
  }

}
