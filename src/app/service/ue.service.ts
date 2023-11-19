import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UeService {

  constructor(private httpClient: HttpClient) { }

  getListUe(){
    return this.httpClient.get("http://127.0.0.1:5000/api/ue/");
  }
}
