import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {UserStatisticsComponent} from './components/user-statistics/user-statistics.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {PreloaderComponent} from './shared/components/preloader/preloader.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ChartsComponent} from './components/charts/charts.component';
import {FormsModule} from "@angular/forms";
import {FusionChartsModule} from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UserStatisticsComponent,
    PreloaderComponent,
    ChartsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FusionChartsModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
