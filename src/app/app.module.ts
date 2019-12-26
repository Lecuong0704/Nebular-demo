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
  NbSidebarService,
  NbActionsModule,
  NbIconModule,
  NbDatepickerModule,
  NbCalendarRangeModule
} from "@nebular/theme";
import { AppRoutingModule } from "./app-routing.module";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbDateFnsDateModule } from "@nebular/date-fns";
import { NbMomentDateModule } from "@nebular/moment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    AppRoutingModule,
    NbDatepickerModule.forRoot(),
    NbCardModule,
    NbSearchModule,
    NbActionsModule,
    NbInputModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCalendarRangeModule,
    // NbDateFnsDateModule,
    // NbMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
