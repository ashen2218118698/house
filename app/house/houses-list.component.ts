/**
 * Created by frontend-huan on 2016/11/24.
 */
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {House} from "./house";
import {HouseService} from "./house.service";
import {Observable} from "rxjs";
@Component({
    moduleId: module.id,
    templateUrl: 'houses-list.component.html',
    styleUrls: [ 'houses-list.component.css' ]
})
export class HousesListComponent implements OnInit{
    errorMessage: string;
    private houses: Observable<House[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private houseService: HouseService
    ) {}

    ngOnInit() {
        this.getHouses();
    }

    getHouses() {
        this.houses = this.houseService.getHouses();
    }

    gotoDetail(house: House) {
        this.router.navigate(['[house.id]', { relativeTo: this.route }]);
    }
}
