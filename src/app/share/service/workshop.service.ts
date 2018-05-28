import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import {Workshop} from "../model/workshop.models";

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get<any>('api/workshop/getAll');
  }

  public add(workshop: Workshop){
    return this.http.post<Workshop>('api/workshop/add', workshop);
  }
}
