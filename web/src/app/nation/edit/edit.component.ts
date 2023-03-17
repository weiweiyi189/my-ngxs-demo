import { Component, OnInit } from '@angular/core';
import { Nation } from "../../../entity/nation";
import { Store } from "@ngxs/store";
import { GetNationById, UpdateNation } from "../store/actions/nation.action";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  nation: Nation | undefined;

  constructor(private store: Store,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = param.id;
      if (id !== null) {
        this.store.dispatch(new GetNationById(id)).subscribe((nation) => {
          this.nation = nation;
        })
      }
    })
  }

  update() {
    this.store.dispatch(new UpdateNation(this.nation!));
  }
}
