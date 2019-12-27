import { Component, OnInit, Input } from '@angular/core';
import { BaseEditorComponent } from 'src/app/editor/base-editor-component';
export interface StringComponentOptions {}

@Component({
  selector: 'app-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.less']
})
export class InputStringComponent extends BaseEditorComponent<StringComponentOptions> implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() fieldSize: string = "medium"; // small / large
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() col: string = "col-12";
  @Input() model: any = "";
  @Input() type: any = "";
  @Input() minLength: number;
  @Input() maxLength: number;
  public isMask;
  public showMessage = false;
  public isRequire: boolean = false;
  public message: string = "Value is not a valid";

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.require) {
      this.IsRequire = true;
    }
  }

  get value(): any {
    let result = this.getValue();
    return result;
  }

  set value(v: any) {
    this.setValue(v);
    // check require
    if (this.require) {
      if (this.value == null || this.value == undefined || this.value == "") {
        this.showMessage = true;
        this.setRequire(true);
        this.message = `Value is not a valid`;
        return;
      } else {
        this.showMessage = false;
        this.setRequire(false);
      }
    }

    // check min length
    let minLength = this.minLength;
    if (minLength != undefined && minLength != null && minLength != NaN) {
      let result = this.validateMinLength(this.value, minLength);
      if (result) {
        this.setRequire(true);
        this.showMessage = true;
        this.message = `${this.label} cần có độ dài lớn hơn hoăc bằng ${minLength}`;
        return;
      } else {
        this.setRequire(false);
        this.showMessage = false;
      }
    }

    // check max length
    let maxLength = this.maxLength;
    if (maxLength != undefined && maxLength != null && maxLength != NaN) {
      let result = this.validateMaxLength(this.value, maxLength);
      if (result) {
        this.setRequire(true);
        this.showMessage = true;
        this.message = `${this.label} cần có độ dài nhỏ hơn hoăc bằng ${maxLength}`;
        return;
      } else {
        this.setRequire(false);
        this.showMessage = false;
      }
    }
  }
}
