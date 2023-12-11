import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sales } from '../interfaces/sales';
import { environment } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'payment/checkout';
   }

  chargePayment(sell:sales[],tokenID:string){
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,{
      sales: sell,
      tokenID: tokenID
    });
  }

}
