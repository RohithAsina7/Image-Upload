import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
    Http,
    Headers,
    Response,
    RequestOptions,
    ResponseContentType
} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/timeout";

import { AuthHttp } from "angular2-jwt";

@Injectable()
export class ApiService {
    // headers = { headers: new Headers({ 'content-type': 'appication/json' }) };
    // options = new RequestOptions();
    constructor(public authHttp: AuthHttp, public http: Http) { }

    callApi(url, method, body): Observable<any> {
        switch (method.toUpperCase()) {
            case "LOGIN":
                return this.http
                    .post(url, body)
                    .timeout(120000)
                    .map(this.extraData)
                    .do((response: Response) => response);
            case "POST":
                return this.authHttp
                    .post(url, body)
                    .timeout(120000)
                    .map(this.extraData)
                    .do((response: Response) => response);
            case "GET":
                return this.authHttp
                    .get(url, body)
                    .timeout(120000)
                    .map(this.extraData)
                    .do((response: Response) => response);
        }
    }
    extraData(response: Response): Response {
        return response.json();
    }

    token() {
        return new RequestOptions({
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "BEARER " + sessionStorage.getItem("token")
            })
        });
    }
}
