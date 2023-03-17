import { Nation } from "../../../../entity/nation";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { AddNation, GetAllNations, GetNationById, RemoveNation, UpdateNation } from "../actions/nation.action";
import { NationService } from "../../../../services/nation.service";
import { tap } from "rxjs/operators";
import * as _ from "lodash";

export interface NationStateModel {
  nations: Nation[];
}

export const NationStateDefaults: NationStateModel = {
  nations: []
};

@State<NationStateModel>({
  name: 'nation',
  defaults: NationStateDefaults
})
@Injectable()
export class NationState {

  constructor(private nationService: NationService) {
  }

  @Selector()
  static getNations(state: NationStateModel): Nation[] {
    return state.nations;
  }

  @Action(AddNation)
  addNation(
    stateContext: StateContext<NationStateModel>,
    action: AddNation
  ) {
    const toAddNation = action.payload;
    return this.nationService.save(toAddNation).pipe(tap(nation => {
      const state = stateContext.getState();
      stateContext.patchState({
        nations: _.concat(state.nations, nation)
      })
    }))
  }

  @Action(GetNationById)
  GetNationById(
    stateContext: StateContext<NationStateModel>,
    action: GetNationById
  ) {
    const state = stateContext.getState()
    return state.nations.find((nation) => {return nation.id = action.payload});
  }

  @Action(UpdateNation)
  Update(
    stateContext: StateContext<NationStateModel>,
    action: UpdateNation
  ) {
    const nation = action.payload;
    return this.nationService.update(nation).pipe(tap(nation => {
      const state = stateContext.getState();
      const index = state.nations.map(nation => nation.id).indexOf(nation.id);
      stateContext.patchState({
        nations: state.nations.splice(index, 1 , nation)
      })
    }))
  }

  @Action(GetAllNations)
  page(
    stateContext: StateContext<NationStateModel>,
    action: GetAllNations
  ) {
    const param = action.payload;
    return this.nationService.findAll(param).pipe(tap(nations => {
      stateContext.patchState({
        nations: nations
      })
    }))
  }

  @Action(RemoveNation)
  RemoveNation(
    stateContext: StateContext<NationStateModel>,
    action: RemoveNation
  ) {
    const nationId = action.payload;
    return this.nationService.delete(nationId).pipe(tap(nations => {
      const state = stateContext.getState();
      const index = state.nations.map(nation => nation.id).indexOf(nationId);
      state.nations.splice(index, 1);
      stateContext.patchState({
        nations: state.nations
      })
    }))
  }
}
