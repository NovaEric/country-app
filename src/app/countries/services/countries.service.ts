import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { ICountry } from '../interfaces/ICountry';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { };

  searchCapital(term: string): Observable<ICountry[]>{
    const url = `${ this.apiUrl }/capital/${ term }`
    return this.httpClient.get<ICountry[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCountry(term: string): Observable<ICountry[]>{
    const url = `${ this.apiUrl }/name/${ term }`
    return this.httpClient.get<ICountry[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchRegion(term: string): Observable<ICountry[]>{
    const url = `${ this.apiUrl }/region/${ term }`
    return this.httpClient.get<ICountry[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCountryByAlphaCode(term: string): Observable<ICountry | null>{
    const url = `${ this.apiUrl }/alpha/${ term }`
    return this.httpClient.get<ICountry[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }
}
