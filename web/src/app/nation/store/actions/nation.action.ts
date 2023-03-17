import { Nation } from "../../../../entity/nation";


export const NationActionTypes = {
  getNations : '[Nation] getNations',
  getNation : '[Nation] getNationById',
  addNation : '[Nation] addNation',
  removeNation : '[Nation] removeNation',
  updateNation : '[Nation] updateNation',
}

export class GetAllNations {
  static  readonly type = NationActionTypes.getNations;
  // 查询参数
  constructor(public payload: {name: string}) {
  }
}

export class GetNationById {
  static readonly type = NationActionTypes.getNation;

  constructor(public payload: number) {
  }
}

export class AddNation {
  static readonly type = NationActionTypes.addNation;

  constructor(public payload: Nation) {
  }
}

export class RemoveNation {
  static readonly type = NationActionTypes.removeNation;

  constructor(public payload: number) {
  }
}

export class UpdateNation {
  static readonly type = NationActionTypes.updateNation;

  constructor(public payload: Nation) {
  }
}


