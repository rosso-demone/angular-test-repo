import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibComponent } from './my-lib.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [MyLibComponent, CustomTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    CdkTableModule,
    ScrollingModule,
    LayoutModule
  ],
  exports: [MyLibComponent, CustomTableComponent]
})
export class MyLibModule { }
