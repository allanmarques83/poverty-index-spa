import { Component } from '@angular/core';
import { Country } from './model/country.model';
import { Poverty } from './model/poverty.model';
import { ApiRepository } from './repository/api.repository';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private countries: Country[] = [];
  private povertys: Poverty[] = [];

  constructor(private repository: ApiRepository) {
    this.repository.getCountries().subscribe(data => this.countries = data);
  }

  get countriesList(): Country[] {
    return this.countries;
  }

  getPoverty(countryCode: string) {
    this.repository.getPoverty(countryCode).subscribe(data => this.povertys = data);
  }

  get povertyList(): Poverty[] {
    return this.povertys;
  }
}
