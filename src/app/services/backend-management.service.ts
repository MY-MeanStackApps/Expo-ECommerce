import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendManagementService {

  baseUrl = environment.baseurl + '/category/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.baseUrl + 'getAll');
  }

  delete(id) {
    return this.http.delete(this.baseUrl + id);
  }

  getById(id) {
    return this.http.get(this.baseUrl + id);
  }

  update(data) {
    return this.http.post(this.baseUrl + '/update', data);
  }

  create(data) {
    return this.http.post(this.baseUrl + '/create', data);
  }




}
