import { Component } from '@angular/core';
import { CountryCode } from './model/country.model';
import { Poverty } from './model/poverty.model';
import { ApiRepository } from './repository/api.repository';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private countrys: CountryCode[] = [];
  private povertys: Poverty[] = [];

  constructor(private repository: ApiRepository) {
    this.repository.getCountrys().subscribe(data => this.countrys = data);
  }

  get countryList(): CountryCode[] {
    return this.countrys;
  }

  getPoverty(countryCode: string) {
    this.repository.getPoverty(countryCode).subscribe(data => this.povertys = data);
  }

  get povertyList(): Poverty[] {
    return this.povertys;
  }
}
