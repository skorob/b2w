
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable()
export class GEOService {

  static readonly GEO_API_KEY='AIzaSyDNBikVW8Hx7-ntW3HI2iHYoKBjuXodkZs';

  constructor( private http: HttpClient) {

  }

  readGEOInfoByLangLat(latitude:number,longitude:number):Promise<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set("Access-Control-Allow-Headers","*")
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?key='+GEOService.GEO_API_KEY+'&latlng='+latitude+','+longitude+'&sensor=false';
    return this.http.get<any>(url, {headers:httpHeaders}).toPromise<any>()
       .then(((locationInfo:any)=>{
         return locationInfo;
       }));
  }
}
