export class SuperLib {
  private _name: string;
  private _options: {};
  constructor(id: string, name: string, options: {}) {
    this._name = name;
    this._options = options;
  }
  public get name(): string {
    return this._name;
  }
  public get options(): {} {
    return this._options;
  }
}
