import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpService) { }

  loadTreeData1() {
    return this.http.getJson(`/assets/data/tree/1.json`);
  }
}
