import { Component, OnInit, Input } from "@angular/core";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";
import { NbDateService } from '@nebular/theme';

@Component({
  selector: "app-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.less"]
})
export class InputDateComponent extends BaseEditorComponent<any>
  implements OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() require: boolean = false;
  @Input() cssClassInput: string = "col-10";
  @Input() cssClassLabel: string = "col-2";
  @Input() class: string = "col-12";
  @Input() fieldSize: string = "medium"; // small / large
  @Input() model: any = "";
  @Input() type: any = "";
  @Input() min: Date;
  @Input() max: Date;
  @Input() format: any="dd/MM/yyyy";
  @Input() messageError: string = "Value is not a valid";

  public showMessage = false;
  public isRequire: boolean = false;

  constructor(protected dateService: NbDateService<Date>) {
    super();
  }
  
  ngOnInit() {
    if (this.require) {
      this.IsRequire = true;
    }
    this.min = new Date(this.min)
    this.max = new Date(this.max)
  }
  getValue(): Date {
    let v = this._value; // number
    return v;
  }
  setValue(v) {
    this._value = v;
    // check require
    if (this.require) {
      if (this.value == null || this.value == undefined) {
        this.showMessage = true;
        this.setRequire(true);
        this.messageError = `Value is not a valid`;
        return;
      } else {
        this.showMessage = false;
        this.setRequire(false);
      }
    }
  }

  get value(): Date {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
