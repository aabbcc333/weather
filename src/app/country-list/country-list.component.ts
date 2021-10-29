import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryList: any = undefined;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.com/v3.1/all')
      .subscribe((Response: any) => {
        console.log(Response)
        this.countryList = Response.filter((data: any) => data.name.common && data.capital?.length && data.cca2)
      });

  }
  goToDetail(city: any, code: any) {
    this.router.navigate(['/weatherDetail', { city: city, code: code }]);
  }

}
