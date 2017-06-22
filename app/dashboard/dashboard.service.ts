/**
 * Created by frontend-huan on 2016/11/24.
 */
import {Injectable} from "@angular/core";
import {House} from '../house/house';
import {BtLocation} from './bt-location';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Agent} from "../agent/agent";
@Injectable()
export class DashboardService {

    constructor(private http: Http) {}

    search(term: string): Observable<House[]> {
        return this.http
            .get(`app/data/get-houses-by-location.php?location=${term}`)
            .map((r: Response) => r.json().data as House[]);
    }
    getNearbyHouses(): Observable<House[]> {
        return this.http
            .get("/app/data/get-nearby-houses.php")
            .map((r: Response) => r.json());
    }

    getTopForSale(): Observable<House[]> {
        return this.http
            .get("/app/data/top-houses-forsale.php")
            .map((r: Response) => r.json());
    }

    getTopForRent(): Observable<House[]> {
        return this.http
            .get("/app/data/top-houses-forrent.php")
            .map((r: Response) => r.json());
    }

    getBtLocation(): Observable<BtLocation[]> {
        return this.http
            .get("/app/data/btlocation.php")
            .map((r: Response) => r.json());
    }

    getTopAgents(): Observable<Agent[]> {
        return this.http
            .get("/app/data/get-top-agents.php")
            .map((r: Response) => r.json());
    }
}