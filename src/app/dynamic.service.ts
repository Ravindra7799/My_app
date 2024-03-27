import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor(private _httpClient: HttpClient) { }

  getDynamic(): Observable<any> {
    return this._httpClient.get("https://www.boredapi.com/api/activity");
  }
}
