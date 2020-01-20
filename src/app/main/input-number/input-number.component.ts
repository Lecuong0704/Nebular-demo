import { Component, OnInit, Input } from "@angular/core";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";

@Component({
  selector: "app-input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.less"]
})
export class InputNumberComponent extends BaseEditorComponent<any>
  implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() class: string = "col-12";
  @Input() cssClassInput: string = "";
  @Input() cssClassLabel: string = "";
  @Input() fieldSize: string = "medium"; // small / large
  @Input() model: any = "";
  @Input() type: any = "";
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() mask: string = "separator";
  @Input() suffix: string = "";
  @Input() thousandSeparator: string = ".";
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

  convertStringToNumber(numberString) {
    let arr = numberString.split(".");
    let v = Number(arr[0]);
    let f = Number(`0.${arr[1]}`);
    let result = v + f;
    return result;
  }

  getValue() {
    let v = this._value; // number
    return v;
  }

  setValue(v) {
    // check require
    if (this.require) {
      if (v == null || v == undefined || v == "") {
        this.showMessage = true;
        this.setRequire(true);
        this.message = `Value is not a valid`;
        return;
      } else {
        this.showMessage = false;
        this.setRequire(false);
      }
    }
    if (this.mask == "separator.2") {
      v = this.convertStringToNumber(v);
    } else if(this.mask == "separator") {
      v = Number(v);
    }else{
      // this.thousandSeparator= '',
      
    }
    this._value = v;
  }

  get value(): number {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
