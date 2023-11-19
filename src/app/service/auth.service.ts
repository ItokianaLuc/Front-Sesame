import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const response = this.httpClient.post("http://127.0.0.1:5000/api/user/login",
      {
        email: username,
        password: password
      }
    );
    console.log("Response===>", response);
    return response;
  }

  addUser(name: string, firstname: string, identification: string, password: string, role: string, email: string, phone: string) {
    const response = this.httpClient.post("http://127.0.0.1:5000/api/user/",
      {
        "name": name,
        "firstname": firstname,
        "identification": identification,
        "password": password,
        "role": role,
        "email": email,
        "phone": phone
      },
    );
    console.log("Response===>", response);
    return response;
  }
}
