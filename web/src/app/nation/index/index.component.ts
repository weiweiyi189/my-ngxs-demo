import { Component, OnInit } from '@angular/core';
import { Nation } from "../../../entity/nation";
import { Select, Store } from "@ngxs/store";
import { AddNation, GetAllNations, RemoveNation } from "../store/actions/nation.action";
import { NationState } from "../store/states/nation.states";
import { Observable } from "rxjs";



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Select(NationState.getNations) nationPage$: Observable<Nation[]> | undefined;

  nations: Nation[] | undefined

  show = false;

  model = {} as Nation;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllNations({name: ''}));
    this.nationPage$?.subscribe((nations) => {
      this.nations = nations;
    })
  }

  delete(id: number): void {
    if (confirm('确认要删除吗?')) {
      this.store.dispatch(new RemoveNation(id));
    }
  }

  save(): void {
    if (confirm('确认要新增吗?')) {
      const nation = this.model;
      this.store.dispatch(new AddNation(nation));
      this.show = false;
      this.model = {} as Nation;
    }
  }
}
