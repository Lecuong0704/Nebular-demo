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
} from "@nebular/theme";
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [MainComponent],
  imports: [
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
