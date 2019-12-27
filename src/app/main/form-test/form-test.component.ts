import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputStringComponent } from "../input-string/input-string.component";
import { InputNumberComponent } from "../input-number/input-number.component";
import { InputDateComponent } from "../input-date/input-date.component";
import { InputCheckboxComponent } from "../input-checkbox/input-checkbox.component";
import { InputRadioComponent } from "../input-radio/input-radio.component";

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
  @ViewChild("appInputCheckbox", { static: true })
  appInputCheckbox: InputCheckboxComponent;
  @ViewChild("appInputCheckbox2", { static: true })
  appInputCheckbox2: InputCheckboxComponent;
  @ViewChild("appInputRadio", { static: true })
  appInputRadio: InputRadioComponent;

  public model: any = {};
  public formData;
  public form;
  public options = [
    {
      label: "Đá bóng",
      value: true,
      disabled: true
    },
    {
      label: "Cầu lông",
      value: false,
      disabled: true
    },
    {
      label: "Bóng bàn",
      value: false,
      disabled: true
    },
    {
      label: "Bơi lội",
      value: true,
      disabled: true
    },
    {
      label: "E-Sport",
      value: true,
      disabled: true
    }
  ];
  public listOptionRadio = [
    { value: "This is value 1", label: "Option 1", checked: true },
    { value: "This is value 2", label: "Option 2" },
    { value: "This is value 3", label: "Option 3" },
    { value: "This is value 4", label: "Option 4", disabled: true }
  ];
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
      Checkbox: this.appInputCheckbox2.value,
      Radio: this.appInputRadio.value
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
