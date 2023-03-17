import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class IndexModule { }
