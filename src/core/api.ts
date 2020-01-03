import { IApiResponse } from './model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class Api<T> {
  constructor(protected http: HttpClient, protected actionUrl: string, protected TModel?: new (...args) => T) {
  }

  getByURL(): Observable<IApiResponse> {
    const req = this.http.get<IApiResponse>(`${this.actionUrl}`)
    return this.getResponse(req);
  }

  private fromJson(toObject, json: any): T {
    return Object.assign(toObject, json);
  }

 
  postByQuery(query: any): Observable<IApiResponse> {
    const req = this.http.post<IApiResponse>(`${this.actionUrl}`, query);
    return this.getResponse(req);
  }
  private getResponse(req) {
    if (this.TModel) {
      return req.map(response => {
        const objTModel = new this.TModel();
        response.data = this.fromJson(objTModel, response.data);
        return response;
      });
    }

    return req;
  }
 

}
