import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    EditComponent
  ],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class EditModule { }
