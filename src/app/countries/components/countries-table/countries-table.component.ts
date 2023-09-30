import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
    `img {
      width: 25px;
    }
    `
  ]
})

export class CountriesTableComponent {

  @Input()
  public countries: ICountry[] = [];

}
