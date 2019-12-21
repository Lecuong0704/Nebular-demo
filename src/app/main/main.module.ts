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
  NbIconModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { TestComponent } from "./test/test.component";
import { BaseEditorComponent } from "../editor/base-editor-component";
import { FormsModule } from "@angular/forms";
import { FormTestComponent } from './form-test/form-test.component';

@NgModule({
  declarations: [MainComponent, TestComponent, FormTestComponent],
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
    NbEvaIconsModule
  ]
})
export class MainModule {}
