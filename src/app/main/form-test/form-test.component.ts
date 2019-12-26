import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputStringComponent } from "../input-string/input-string.component";
import { InputNumberComponent } from "../input-number/input-number.component";
import { InputDateComponent } from "../input-date/input-date.component";
import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';

@Component({
  selector: "app-form-test",
  templateUrl: "./form-test.component.html",
  styleUrls: ["./form-test.component.less"]
})
export class FormTestComponent implements OnInit {
  @ViewChild("apptest", { static: true }) apptest: InputStringComponent;
  @ViewChild("apptest2", { static: true }) apptest2: InputStringComponent;
  @ViewChild("apptest3", { static: true }) apptest3: InputStringComponent;
  @ViewChild("appInputNumber", { static: true })
  appInputNumber: InputNumberComponent;
  @ViewChild("appInputDate", { static: true }) appInputDate: InputDateComponent;
  @ViewChild("appInputCheckbox", { static: true }) appInputCheckbox: InputCheckboxComponent;
  @ViewChild("appInputCheckbox2", { static: true }) appInputCheckbox2: InputCheckboxComponent;

  public model: any = {};
  public formData;
  public form;
  public options = {
    "Đá bóng": true,
    "Cầu lông": false,
    "Bóng bàn": false,
    "Bơi lội": true,
    "E-Sport": true,
    "LOL": false
  };
  constructor() {}

  ngOnInit() {}

  onclick() {
    // get value
    this.formData = {
      FullName: this.apptest.value,
      Phone: this.apptest2.value,
      Address: this.apptest3.value,
      Amount: this.appInputNumber.value,
      Date: this.appInputDate.value,
      CheckboxGroup: this.appInputCheckbox.value,
      Checkbox: this.appInputCheckbox2.value
    };

    // list check require
    this.form = [
      this.apptest,
      this.apptest2,
      this.apptest3,
      this.appInputNumber,
      this.appInputDate
    ];

    // check the require with for loop
    for (let index = 0; index < this.form.length; index++) {
      const element = this.form[index];
      if (element.isRequire) {
        element.showMessage = true;
        return;
      }
    }
    console.log(this.formData);
  }
}
