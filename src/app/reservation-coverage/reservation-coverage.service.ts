import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReservationCoverageService {

  constructor(private http: HttpClient) { }

  server_url = 'http://localhost:3000/instance'

  getReservation() {
    return this.http.get(this.server_url)
  }
}
