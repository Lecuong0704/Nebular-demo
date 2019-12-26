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
  @Input() col: string = "col-12";
  @Input() model: any = "";
  @Input() type: any = "";
  @Input() min: Date;
  @Input() max: Date;
  @Input() format: any="dd/MM/yyyy";

  public showMessage = false;
  public isRequire: boolean = false;
  public message: string = "Value is not a valid";

  constructor(protected dateService: NbDateService<Date>) {
    super();
  }
  
  ngOnInit() {
    this.min = new Date(this.min)
    this.max = new Date(this.max)
  }
  getValue(): Date {
    let v = this._value; // number
    return v;
  }
  setValue(v) {
    this._value = v;
  }

  get value(): Date {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
