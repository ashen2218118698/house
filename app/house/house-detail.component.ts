/**
 * Created by frontend-huan on 2016/11/26.
 */
import {Component, OnInit, HostBinding, trigger, state, style, transition, animate} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {House} from "./house";
import {HouseService} from "./house.service";
@Component({
    moduleId: module.id,
    templateUrl: 'house-detail.component.html',
    styleUrls: [ 'house-detail.component.css' ],
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class HouseDetailComponent implements OnInit{
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    house: House;

    constructor(
        private houseService: HouseService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.houseService.getHouses())
    }
}