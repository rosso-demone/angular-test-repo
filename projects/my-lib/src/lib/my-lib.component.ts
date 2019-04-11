import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';
import { BankObject } from './my-lib.bank-object';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      <span *ngFor="let dataObj of data">
        <li>
          <span>{{dataObj | json}}</span>
        </li>
      </span>
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {
  objectKeys = Object.keys;
  constructor(private myLibService: MyLibService) { }
  data: BankObject[];
  currentTime = new Date();

  ngOnInit() {
    // this.data = this.myLibService.getData();
    // this.data1 = this.data;
    this.myLibService.getData().subscribe(
      (data: BankObject[]) => {
        this.data = data;
      },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  timer = function () {
    let chaitanya = this.currentTime;
    console.log('test called');
    setInterval(() => {
      console.log('test execution - start');
      chaitanya = new Date((chaitanya).getTime() + 1000);
      this.currentTime = chaitanya;
    }, 1000);
  };
}
