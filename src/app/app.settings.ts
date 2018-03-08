import { environment } from "../environments/environment";
export class Appsetting {
    public static API = {
        savecodes: environment.apiUrl + "codes",
        GETIMAGEDETAILS: environment.apiUrl + "img_list"
    };
    
    public static image_path = environment.apiUrl + "image/";

}