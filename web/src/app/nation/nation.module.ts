import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationRoutingModule } from './nation-routing.module';
import { IndexModule } from "./index/index.module";
import { NationState } from "./store/states/nation.states";
import { NgxsModule } from "@ngxs/store";
import { NationService } from "../../services/nation.service";
import { HttpClientModule } from "@angular/common/http";
import { EditModule } from "./edit/edit.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NationRoutingModule,
    HttpClientModule,
    NgxsModule.forFeature([NationState]),
    IndexModule,
    EditModule
  ],
  providers: [
    NationService
  ]
})
export class NationModule { }
