import { Component, OnInit, Input } from "@angular/core";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";

@Component({
  selector: "app-input-radio",
  templateUrl: "./input-radio.component.html",
  styleUrls: ["./input-radio.component.less"]
})
export class InputRadioComponent extends BaseEditorComponent<any>
  implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() col: string = "col-12";
  @Input() data = [];
  @Input() status: string = "primary";
  public showMessage = false;
  public isRequire: boolean = false;
  public message: string = "Value is not a valid";

  constructor() {
    super();
  }

  ngOnInit() {
    let checked = this.data.filter(x=>x.checked == true)[0]
    this.setValue(checked.value)
  }

  getValue() {
    let v = this._value;
    return v;
  }

  setValue(v) {
    this._value = v;
  }

  get value(): number {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
