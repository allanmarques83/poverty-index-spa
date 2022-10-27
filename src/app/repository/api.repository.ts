import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { CountryCode } from "../model/country.model";
import { Poverty } from "../model/poverty.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class ApiRepository{
    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) {}

    getCountrys(): Observable<CountryCode[]> {
        return this.http.get<CountryCode[]>(`${this.url}/countrys`);
    }

    getPoverty(countryCode: string): Observable<Poverty[]> {
        return this.http.get<Poverty[]>(`${this.url}/poverty`)
    }
}