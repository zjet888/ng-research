import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  loadGraphData1() {
    return this.http.getJson(`/assets/data/graph/1.json`);
  }
  loadGraphData2() {
    return this.http.getJson(`/assets/data/graph/2.json`);
  }
  loadGraphData3() {
    return this.http.getJson(`/assets/data/graph/3.json`);
  }
  loadGraphData4() {
    return this.http.getJson(`/assets/data/graph/4.json`);
  }
  constructor(private http: HttpService) {}

  loadTreeData1() {
    return this.http.getJson(`/assets/data/tree/1.json`);
  }
  loadTreeData2() {
    return this.http.getJson(`/assets/data/tree/2.json`);
  }
}
