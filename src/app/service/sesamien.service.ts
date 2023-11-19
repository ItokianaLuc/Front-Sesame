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
    return this.httpClient.get("http://127.0.0.1:5000/api/sesamien/", { headers });
  }

  addSesamien(name:string,firstname:string,age:number,mention:string,genre:string,region:string,promotion:string) {
    let user = this.cookieService.get('userData');
    let userObject = JSON.parse(user);
    const token = userObject.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const response = this.httpClient.post("http://127.0.0.1:5000/api/sesamien/",
      {
        "name": name,
        "firstname": firstname,
        "age": age,
        "mention": mention,
        "genre": genre,
        "region": region,
        "promotion": promotion
      }, { headers }
    );
    console.log("Response===>", response);
    return response;
  }
}
