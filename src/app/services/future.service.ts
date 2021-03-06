import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class FutureService {

  constructor(private http: HttpClient, private router: Router) {}

  public AddFutureHarvest(harvest): Observable<any> {
    return this.http.post(`http://localhost:8080/api/farmer/future`, harvest)
  }

  public CurrentHarvest(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/summary/harvest/2019`)
  }

  public FutureHarvest(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/summary/future/2020`)
  }
}
