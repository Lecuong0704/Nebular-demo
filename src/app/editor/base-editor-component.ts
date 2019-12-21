export abstract class BaseEditorComponent<TOption> {
  constructor(private options?: TOption) {}

  private _value;
  getValue() {
    return this._value;
  }

  setValue(v) {
    this.onValueChange(v);
    this._value = v;
    this.onEditedValue(v);

    let b = this.onValidateValue(v);
    if (!b) {
    }
  }

  isReadonly: boolean;
  get IsReadonly(): boolean {
    return this.isReadonly;
  }

  set IsReadonly(v: boolean) {
    this.isReadonly = v;
  }

  onEditedValue: (v) => void;
  onValueChange: (v) => void;
  onValidateValue: (v) => boolean;

  setError(v: boolean, msg: string) {
    if (v) {
      //set giao diện warning kèm message
    } else {
      //set về bt xóa message
    }
  }

  setRequire(v: boolean) {
    this.IsRequire = v;
    if (this.IsRequire) {
      //set giao diện
    }
  }

  isRequire: boolean;
  get IsRequire(): boolean {
    return this.isRequire;
  }

  set IsRequire(v: boolean) {
    this.isRequire = v;
  }
}
