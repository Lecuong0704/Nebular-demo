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
  NbDatepickerModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { BaseEditorComponent } from "../editor/base-editor-component";
import { FormsModule } from "@angular/forms";
import { FormTestComponent } from './form-test/form-test.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputStringComponent } from './input-string/input-string.component';
import { InputDateComponent } from './input-date/input-date.component'
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [MainComponent, FormTestComponent, InputNumberComponent, InputStringComponent, InputDateComponent],
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
    // NbMomentDateModule,
    NbEvaIconsModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class MainModule {}
