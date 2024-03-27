import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _httpClient: HttpClient) { }

  getCars(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }

  getfilteredCars(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getpagedCars(pageNo: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=8&page="+pageNo);
  }

  getsortedCars(column:string,order:string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  getdeletedCars(id:string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createCars(data:any): Observable<any> {
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/",data);
  }

  loaddata(queries:any){

    let str = '';

    if(queries.filter){
      str += "filter="+queries.filter+"&";
    }
    if(queries.pageNo){
      str += "page="+queries.pageNo+"&";
      str += "limit="+queries.limit+"&";
    }
    if(queries.sortBy){
      str += "sortBy="+queries.sortBy+"&";
    }
    if(queries.order){
      str += "order="+queries.order+"&"
    }

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?"+str);

  }

}
