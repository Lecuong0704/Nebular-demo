import { Component, OnInit, Input } from "@angular/core";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";

@Component({
  selector: "app-input-select",
  templateUrl: "./input-select.component.html",
  styleUrls: ["./input-select.component.less"]
})
export class InputSelectComponent extends BaseEditorComponent<any>
  implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() shape: string = "";
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() multiple: boolean = false;
  @Input() cssClassInput: string = "col-10";
  @Input() cssClassLabel: string = "col-2";
  @Input() type: string = "default"; // multiple / group
  @Input() class: string = "col-12";
  @Input() data = [];
  @Input() messageError: string = "Value is not a valid";
  public showMessage = false;
  public isRequire: boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.require) {
      this.IsRequire = true;
    }
    if(this.type == 'multiple'){
      this.setValue([])
    }
  }
  getValue() {
    let v = this._value;
    return v;
  }

  setValue(v) {
    this._value = v;
    // check require
    if (this.require) {
      if (this.value == null || this.value == undefined || this.value == "") {
        this.showMessage = true;
        this.setRequire(true);
        this.messageError = `Bạn chưa có lựa chọn nào`;
        return;
      } else {
        this.showMessage = false;
        this.setRequire(false);
      }
    }
  }

  get value() {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
