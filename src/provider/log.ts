import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApiService } from "../core/api.service";


@Injectable()
export class AuthService {
    constructor(readonly apiService: ApiService) { }

    Log(InputData: any): Observable<any> {
        return this.apiService.Log.postByQuery(InputData);
    }
    
}