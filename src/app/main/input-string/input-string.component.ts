import { Component, OnInit, Input } from "@angular/core";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";
// declare $ const require: any;
export interface StringComponentOptions {}

@Component({
  selector: "app-input-string",
  templateUrl: "./input-string.component.html",
  styleUrls: ["./input-string.component.less"]
})
export class InputStringComponent
  extends BaseEditorComponent<StringComponentOptions>
  implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() fieldSize: string = "medium"; // small / large
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() class: string = "col-12";
  @Input() cssClassInput: string = "col-10";
  @Input() cssClassLabel: string = "col-2";
  @Input() model: any = "";
  @Input() type: any = "text"; // textarea / email
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() defaultValue: string = "";
  @Input() placeholderEmail: string = "";
  @Input() placeholderEmailDomain: string = "";
  @Input() pattern: string = ".+@.+..+";
  public isMask;
  public showMessage = false;
  public isRequire: boolean = false;
  public message: string = "Value is not a valid";
  public email: string;
  public emailDomain: string;
  @Input() isValidEmailDomain = [];

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.require) {
      this.IsRequire = true;
    }
    if (this.defaultValue != "") {
      let arr = this.defaultValue.split("@");
      this.email = arr[0];
      this.emailDomain = arr[1];
      this.setValue(this.defaultValue);
      this.change();
    }
  }
  change() {
    let result = `${this.email}@${this.emailDomain}`;
    if (this.require && this.type == "email") {
      if (!this.checkValidateEmail()) {
        this.message = "Tên email không hợp lệ";
        this.showMessage = true;
        this.setRequire(true);
        return;
      }
      if (!this.checkValidateEmailDomain()) {
        this.message = "Tên miền không hợp lệ";
        this.showMessage = true;
        this.setRequire(true);
        return;
      }
      if (!this.validateEmail(result)) {
        this.message = "Email không hợp lệ";
        this.showMessage = true;
        this.setRequire(true);
        return;
      }
    }
    this.value = result;
  }

  checkValidateEmail() {
    let result;
    let check = this.email;
    if (check == null || check == undefined || check == "") {
      result = false;
      return result;
    } else {
      this.message = "";
      this.showMessage = false;
      this.setRequire(false);
      result = true;
      return result;
    }
  }

  checkValidateEmailDomain() {
    let check;
    if (this.isValidEmailDomain.length > 0) {
      check = this.isValidEmailDomain.find(x => x == this.emailDomain);
    } else {
      return  true;
    }
    if (check == null || check == undefined || check == "") {
      return  false;
    } else {
      this.message = "";
      this.showMessage = false;
      this.setRequire(false);
      return  true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
