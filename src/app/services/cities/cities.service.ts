import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CitiesService {
    private citiesPath = "cities";
    private deleteCityPath = "cities/delete-city/";

    constructor(private _citiesEndpoint: CitiesEndpoint) { }

    getCities() {
        return this._citiesEndpoint.get(this.citiesPath);
    }

    deleteCity(cityId: number) {
        return this._citiesEndpoint.delete(`${this.deleteCityPath}${cityId}`);
    }
}