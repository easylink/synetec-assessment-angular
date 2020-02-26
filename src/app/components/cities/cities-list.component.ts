import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css'],
    providers: [CitiesService]
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];
    constructor(private _citiesService: CitiesService) { }

    ngOnInit(): void {
        // load cities
        this.loadCities();
    }

    loadCities() {
        this._citiesService.getCities().subscribe((cities: ICity[]) => {
            this.cities = cities;
        });
    }

    onDeleteCity(city: ICity) {
        this._citiesService.deleteCity(city.id).subscribe(res => {
            // reload cities
            this.loadCities();
        }, error => console.log("error occured"));

    }
}