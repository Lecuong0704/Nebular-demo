import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputStringComponent } from '../input-string/input-string.component';
import { InputNumberComponent } from '../input-number/input-number.component';
import { InputDateComponent } from '../input-date/input-date.component';

@Component({
  selector: "app-form-test",
  templateUrl: "./form-test.component.html",
  styleUrls: ["./form-test.component.less"]
})
export class FormTestComponent implements OnInit {
  @ViewChild("apptest", { static: true }) apptest: InputStringComponent;
  @ViewChild("apptest2", { static: true }) apptest2: InputStringComponent;
  @ViewChild("apptest3", { static: true }) apptest3: InputStringComponent;
  @ViewChild("appInputNumber", { static: true }) appInputNumber: InputNumberComponent;
  @ViewChild("apptest5", { static: true }) apptest5: InputStringComponent;
  @ViewChild("appInputDate", { static: true }) appInputDate: InputDateComponent;

  public model: any = {};
  public formData;
  public form;
  constructor() {}

  ngOnInit() {}

  onclick() {
    this.formData = {
      FullName: this.apptest.value,
      Phone: this.apptest2.value,
      Address: this.apptest3.value,
      Amount: this.appInputNumber.value,
      Time: this.apptest5.value,
      Date: this.appInputDate.value
    };
    this.form = [this.apptest, this.apptest2, this.apptest3, this.appInputNumber, this.apptest5];
    for (let index = 0; index < this.form.length; index++) {
      const element = this.form[index];
      if (element.isRequire) {
        element.showMessage = true;
        // alert("Yêu cầu nhập các trường bắt buộc");
        return;
      }
    }
    console.log(this.formData);
  }
}
