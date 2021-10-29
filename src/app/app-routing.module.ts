import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'weatherDetail', component: WeatherDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
