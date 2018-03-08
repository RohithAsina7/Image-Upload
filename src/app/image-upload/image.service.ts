import { Injectable } from '@angular/core';
import { ApiService } from '../shared-service/api.service';
import { Appsetting } from '../app.settings';

@Injectable()
export class ImageService {
    constructor(private _apiService: ApiService) { }


    getImagedetails(values: any = '') {
        const url = Appsetting.API.GETIMAGEDETAILS;
        const body = JSON.stringify(values);
        return this._apiService.callApi(url, 'get', null);

    }
}