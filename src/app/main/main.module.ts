import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbThemeModule
} from "@nebular/theme";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule
  ]
})
export class MainModule {}
