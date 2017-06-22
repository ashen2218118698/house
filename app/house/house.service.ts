/**
 * Created by frontend-huan on 2016/11/26.
 */
import {Injectable} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {House} from "./house";
@Injectable()
export class HouseService {
    private housesUrl = 'app/data/get-all-houses.php';
    private houseUrl = 'app/data/get-house-by-id.php';

    constructor(private http: Http){}

    getHouses(): Observable<House[]> {
        return this.http.get(this.housesUrl)
            .map((r: Response) =>r.json());
    }

    getHouse(id: number): Observable<House> {
        return this.http.get(`${this.houseUrl}/${id}`)
                   .map((res: Response) => res.json());
    }
}