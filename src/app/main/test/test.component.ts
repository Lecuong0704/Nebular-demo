import { Component, OnInit, Input, Output } from "@angular/core";
import { BaseEditorComponent } from "src/app/editor/base-editor-component";

export interface TestComponentOptions {}

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.less"]
})
export class TestComponent extends BaseEditorComponent<TestComponentOptions>
  implements OnInit {
  constructor() {
    super();
    this.onValidateValue = v => {
      if (this.value == null || this.value == undefined) {
        return false;
      }

      return true;
    };
  }

  get value(): string {
    return this.getValue();
  }

  set value(v: string) {
    this.setValue(v);
  }

  ngOnInit() {}
}
