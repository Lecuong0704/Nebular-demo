import { Component, OnInit, Input } from "@angular/core";
import { KeyValue } from "@angular/common";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";

@Component({
  selector: "app-input-checkbox",
  templateUrl: "./input-checkbox.component.html",
  styleUrls: ["./input-checkbox.component.less"]
})
export class InputCheckboxComponent extends BaseEditorComponent<any>
  implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() col: string = "col-12";
  @Input() options = {};
  @Input() status: string = "primary";
  @Input() key: string = "";
  @Input() group: boolean = false;
  @Input() checked: string = "false";
  public showMessage = false;
  public isRequire: boolean = false;
  public message: string = "Value is not a valid";

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.checked == "true") {
      this.setValue(true);
    }
  }

  change(k) {
    for (let i in this.options) {
      if (i == k) {
        if (this.options[i]) {
          this.options[i] = false;
        } else {
          this.options[i] = true;
        }
      }
    }
    this.setValue(this.options);
  }

  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };


  getValue() {
    let v = this._value;
    return v;
  }

  setValue(v) {
    if (this.group) {
      this._value = this.options;
    } else {
      this._value = v;
    }
  }

  get value(): number {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
