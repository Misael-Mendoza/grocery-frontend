import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { list } from './list';

@Injectable({
  providedIn: 'root'
})
export class NewListServiceService {
  private url = "http://localhost:9026/Lists/new"
  constructor(private httpCli: HttpClient) { }

  postList(list: list): Observable<string> {
    return this.httpCli.post<string>(this.url, JSON.stringify(list), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    });
  }



}
