import { Injectable } from '@angular/core';
import { MyLibModule } from './my-lib.module';
import { HttpClient } from '@angular/common/http';
import { BankObject } from './my-lib.bank-object';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: MyLibModule
})

export class MyLibService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<BankObject[]>('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI');
  }
}

