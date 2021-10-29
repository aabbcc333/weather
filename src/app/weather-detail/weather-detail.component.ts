import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  city: any = null
  code: any = null
  weatherData: any = null
  error: any = null
  ngOnInit(): void {

    this.city = this.route.snapshot.paramMap.get('city')
    this.code = this.route.snapshot.paramMap.get('code')
    console.log(this.city, this.code)
    if (this.city && this.code) {
      this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)
        .subscribe((Response: any) => {
          console.log(Response)
          this.weatherData = Response
        }, (err) => {
          this.error = err;
        })
    }
  }

}
