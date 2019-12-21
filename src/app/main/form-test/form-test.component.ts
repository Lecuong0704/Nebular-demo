import { Component, OnInit, ViewChild } from "@angular/core";
import { TestComponent } from "../test/test.component";

@Component({
  selector: "app-form-test",
  templateUrl: "./form-test.component.html",
  styleUrls: ["./form-test.component.less"]
})
export class FormTestComponent implements OnInit {
  @ViewChild("apptest", { static: true }) apptest: TestComponent;
  constructor() {

  }

  onclick() {
    alert(this.apptest.value);
  }

  ngOnInit() {
    this.apptest.onEditedValue = v => {
      console.log("edited", v);
    };

    this.apptest.onValueChange = v => {
      this.apptest.isRequire = true;
    };

  }
}
