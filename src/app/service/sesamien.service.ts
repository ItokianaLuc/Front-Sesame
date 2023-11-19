import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SesamienService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }


  getListSesamien() {
    let user = this.cookieService.get('userData');
    let userObject = JSON.parse(user);
    const token = userObject.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get("http://127.0.0.1:5000/api/sesamien/",{headers});
  }
}
