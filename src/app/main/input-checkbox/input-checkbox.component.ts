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
  @Input() cssClassInput: string = "col-10";
  @Input() cssClassLabel: string = "col-2";
  @Input() class: string = "col-12";
  @Input() options = [];
  @Input() status: string = "primary";
  @Input() key: string = "";
  @Input() group: boolean = false;
  @Input() checked: boolean = false;

  @Input() messageError: string = "Value is not a valid";
  public showMessage = false;
  public isRequire: boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
 
    if (this.checked) {
      this.setValue(true);
    }else{
      this.setValue(false);
    }
  }

  change(l, v) {
    this.options.forEach(x => {
      if (x.label == l) {
        x.value = v;
      }
    });

    this.setValue(this.options);
  }

  getValue() {
    let v;
    if(this.group){
      let result = [];
      this.options.forEach(x => {
        if (x.value) {
          result.push(x.label);
        }
      });
      v = result;
    }else{
      v = this._value
    }
    return v;
  }

  setValue(v) {
    if (this.group) {
      let result = [];
      this.options.forEach(x => {
        if (x.value) {
          result.push(x.label);
        }
      });
      this._value = result;
    } else {
      this._value = v;
    }
  }

  get value() {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
