import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  NbThemeModule,
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbInputModule,
  NbSearchModule,
  NbActionsModule,
  NbIconModule,
  NbDatepickerModule,
  NbCalendarRangeModule
} from "@nebular/theme";
import { AppRoutingModule } from "./app-routing.module";
import { NbEvaIconsModule } from "@nebular/eva-icons";

@NgModule({
  declarations: [AppComponent],
  imports: [
    NbThemeModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbSidebarModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NbCardModule,
    NbSearchModule,
    NbActionsModule,
    NbInputModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCalendarRangeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
