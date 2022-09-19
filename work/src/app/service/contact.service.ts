import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment'; // environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  PHP_API_SERVER = environment.apiUrl;
  private mailApi = `${this.PHP_API_SERVER}contactdb.php`;
  

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            } else {
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

}
