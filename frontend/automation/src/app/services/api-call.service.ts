import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { BehaviorSubject, of } from "rxjs";
import { map } from 'rxjs/operators';
import { DetailModel} from 'src/app/models/details.model'
@Injectable({
  providedIn: "root"
})


export class ApiCallService {


  constructor(private http: HttpClient ) {}

  getHouseList(): Observable<[any]>
    {
        return this.http.get<[any]>('/homes');
    }

    getCurrentHouse(id: string): Observable<[DetailModel]>
    {
        return this.http.get<[DetailModel]>(`/homes/${id}/data`);
    }
}

