import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../model/country.model";
import { Poverty } from "../model/poverty.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class ApiRepository{
    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) {}

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}/countries`);
    }

    getPoverty(countryCode: string): Observable<Poverty[]> {
        return this.http.get<Poverty[]>(`${this.url}/poverty/${countryCode}`)
    }
}