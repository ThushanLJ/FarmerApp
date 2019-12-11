import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ExpectedCultivationService {
  constructor(private route:Router, private http:HttpClient) { }


  public getexpectedCultivation(year): Observable<any> {
    return this.http.get(`http://localhost:8080/api/summary/coverage/${year}`);
  }

  public addexpectedCultivation(details): Observable<any> {
    return this.http.post(`http://localhost:8080/api/expected`, details);
  }


  
  
}

