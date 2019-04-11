import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { BankObject } from '../my-lib.bank-object';
import { MyLibService } from '../my-lib.service';

@Component({
  selector: 'lib-custom-table',
  styleUrls: ['./custom-table.component.css'],
  templateUrl: './custom-table.component.html',
})

export class CustomTableComponent implements OnInit {
  constructor(private myLibService: MyLibService) { }
  dataSource;
  displayedColumns = [];
  loadingHash = {
    'tableData': false
  };
  // @ViewChild(MatSort) sort: MatSort;

  bankColumnNames = [
    { 'id': 'ifsc', 'name': 'IFSC' },
    { 'id': 'bank_id', 'name': 'Bank Id' },
    { 'id': 'branch', 'name': 'Branch' },
    { 'id': 'address', 'name': 'Address' },
    { 'id': 'city', 'name': 'City' },
    { 'id': 'district', 'name': 'District' },
    { 'id': 'state', 'name': 'State' },
    { 'id': 'bank_name', 'name': 'Bank Name' }];


  // keyOfBankObject = Object.keys(BankObject);
  ngOnInit() {
    this.displayedColumns = this.bankColumnNames.map(bankColumnObj => bankColumnObj.id);
    this.createTable();
  }

  createTable() {
    this.loadingHash.tableData = true;
    // let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    // ];
    // this.dataSource = new MatTableDataSource(tableArr);
    return this.myLibService.getData().subscribe(
      (data: BankObject[]) => {
        const tableData: BankObject[] = data;
        this.dataSource = new MatTableDataSource(tableData);
        // this.dataSource.sort = this.sort;
        this.loadingHash.tableData = false;
      },
      error => {
        this.loadingHash.tableData = false;
        console.log(error);
      }
    );
  }
}
