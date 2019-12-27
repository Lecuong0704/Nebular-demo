import { Component, OnInit, ViewChild } from "@angular/core";
import { InputStringComponent } from "../input-string/input-string.component";
import { InputNumberComponent } from "../input-number/input-number.component";
import { InputDateComponent } from "../input-date/input-date.component";
import { InputCheckboxComponent } from "../input-checkbox/input-checkbox.component";
import { InputRadioComponent } from "../input-radio/input-radio.component";
import { InputSelectComponent } from "../input-select/input-select.component";

@Component({
  selector: "app-form-test",
  templateUrl: "./form-test.component.html",
  styleUrls: ["./form-test.component.less"]
})
export class FormTestComponent implements OnInit {
  @ViewChild("apptest", { static: true }) apptest: InputStringComponent;
  @ViewChild("apptest2", { static: true }) apptest2: InputStringComponent;
  @ViewChild("apptest3", { static: true }) apptest3: InputStringComponent;
  @ViewChild("apptest4", { static: true }) apptest4: InputStringComponent;
  @ViewChild("appInputDate", { static: true }) appInputDate: InputDateComponent;
  @ViewChild("appInputNumber", { static: true })
  appInputNumber: InputNumberComponent;
  @ViewChild("appInputCheckbox", { static: true })
  appInputCheckbox: InputCheckboxComponent;
  @ViewChild("appInputCheckbox2", { static: true })
  appInputCheckbox2: InputCheckboxComponent;
  @ViewChild("appInputRadio", { static: true })
  appInputRadio: InputRadioComponent;
  @ViewChild("appInputSelect", { static: true })
  appInputSelect: InputSelectComponent;
  @ViewChild("appInputSelect2", { static: true })
  appInputSelect2: InputSelectComponent;
  @ViewChild("appInputSelect3", { static: true })
  appInputSelect3: InputSelectComponent;

  public model: any = {};
  public formData;
  public form;
  public options = [
    {
      label: "Đá bóng",
      value: true
    },
    {
      label: "Cầu lông",
      value: false,
      disabled: true
    },
    {
      label: "Bóng bàn",
      value: false
    },
    {
      label: "Bơi lội",
      value: true
    },
    {
      label: "E-Sport",
      value: true
    }
  ];
  public listDataRadio = [
    { value: "This is value 1", label: "Option 1", checked: true },
    { value: "This is value 2", label: "Option 2" },
    { value: "This is value 3", label: "Option 3" },
    { value: "This is value 4", label: "Option 4", disabled: true }
  ];
  public dataSelect = [
    {
      label: "Option 1",
      value: "Value 1",
      disabled: true
    },
    {
      label: "Option 2",
      value: "Value 2"
    },
    {
      label: "Option 3",
      value: "Value 3"
    },
    {
      label: "Option 4",
      value: "Value 4"
    }
  ];

  public dataSelectMultiple = [
    {
      label: "Option 1",
      value: "Value 1",
      disabled: true
    },
    {
      label: "Option 2",
      value: "Value 2"
    },
    {
      label: "Option 3",
      value: "Value 3"
    },
    {
      label: "Option 4",
      value: "Value 4"
    },
    {
      label: "Option 5",
      value: "Value 5"
    }
  ];

  public dataSelectGroup = [
    {
      title: "Group 1",
      data: [
        {
          label: "Option 1",
          value: "Value 1",
          disabled: true
        },
        {
          label: "Option 2",
          value: "Value 2"
        },
        {
          label: "Option 3",
          value: "Value 3"
        },
        {
          label: "Option 4",
          value: "Value 4"
        }
      ]
    },
    {
      title: "Group 2",
      data: [
        {
          label: "Option 5",
          value: "Value 5"
        },
        {
          label: "Option 6",
          value: "Value 6"
        },
        {
          label: "Option 7",
          value: "Value 7"
        },
        {
          label: "Option 8",
          value: "Value 8"
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}

  onclick() {
    // get value
    this.formData = {
      FullName: this.apptest.value,
      Notes: this.apptest4.value,
      Phone: this.apptest2.value,
      Address: this.apptest3.value,
      Amount: this.appInputNumber.value,
      Date: this.appInputDate.value,
      CheckboxGroup: this.appInputCheckbox.value,
      Checkbox: this.appInputCheckbox2.value,
      Radio: this.appInputRadio.value,
      Select: this.appInputSelect.value,
      SelectGroup: this.appInputSelect2.value,
      SelectMultiple: this.appInputSelect3.value
    };

    // list check require
    this.form = [
      this.apptest,
      this.apptest2,
      this.apptest3,
      this.apptest4,
      this.appInputNumber,
      this.appInputDate,
      this.appInputCheckbox,
      this.appInputCheckbox2,
      this.appInputRadio,
      this.appInputSelect,
      this.appInputSelect2,
      this.appInputSelect3
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
