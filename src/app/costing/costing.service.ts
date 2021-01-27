import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CostingService {
  server_url = 'http://localhost:3000/cost'

  constructor(private http: HttpClient) { }

  getCosting() {
    return this.http.get(this.server_url + '/cost' )
  }
}
