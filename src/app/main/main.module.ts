import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSearchModule,
  NbActionsModule,
  NbIconModule,
  NbDatepicker,
  NbDatepickerModule,
  NbCheckboxModule,
  NbRadioComponent,
  NbRadioModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { BaseEditorComponent } from "../editor/base-editor-component";
import { FormsModule } from "@angular/forms";
import { FormTestComponent } from "./form-test/form-test.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { InputNumberComponent } from "./input-number/input-number.component";
import { InputStringComponent } from "./input-string/input-string.component";
import { InputDateComponent } from "./input-date/input-date.component";
import { NbDateFnsDateModule } from "@nebular/date-fns";
import { NbMomentDateModule } from "@nebular/moment";
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component";
import { InputRadioComponent } from "./input-radio/input-radio.component";


@NgModule({
  declarations: [
    MainComponent,
    FormTestComponent,
    InputNumberComponent,
    InputStringComponent,
    InputDateComponent,
    InputCheckboxComponent,
    InputRadioComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NbInputModule,
    NbSearchModule,
    MainRoutingModule,
    NbActionsModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    NbCheckboxModule,
    NbRadioModule,
    NbEvaIconsModule,
    NgxMaskModule.forRoot()
  ]
})
export class MainModule {}
