

export abstract class   BaseEditorComponent<TOption> {
  constructor(public options?: TOption) {}

  public _value;
  getValue() {
    return this._value;
  }

  setValue(v) {
    if (this.onValueChange) {
      this.onValueChange(v);
    }

    this._value = v;
    if (this.onEditedValue) {
      this.onEditedValue(v);
    }
  }

  validateMinLength(value, number: number): boolean {
    let result = value.split("").length;
    if (result < number) {
      return true;
    }
    return false;
  }
  validateMaxLength(value, number: number): boolean {
    let result = value.split("").length;
    if (result > number) {
      return true;
    }
    return false;
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
