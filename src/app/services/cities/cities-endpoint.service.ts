import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { RequestOptions } from "@angular/http";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    get(path: string) {
        const url = `${this.getBaseUrl()}api/${path}`;
        return this._httpClient.get(url);
    }

    delete(path: string) {
        const url = `${this.getBaseUrl()}api/${path}`;
        const httpOptions = this.getRequestHeaders();
        return this._httpClient.delete(url, httpOptions);
    }
}