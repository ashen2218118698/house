/**
 * Created by frontend-huan on 2016/11/24.
 */
import {Component, ViewChild, ElementRef, OnInit, AfterViewChecked} from "@angular/core";
import {DashboardService} from "./dashboard.service";
import {Subject, Observable} from "rxjs";
import {House} from "../house/house";
import {BtLocation} from './bt-location';
import {Router, ActivatedRoute} from "@angular/router";
import {Agent} from "../agent/agent";
declare let slickCarousel: Function;
@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit, AfterViewChecked{
    isOpen: false;
    errorMessage: string;
    recommendedHouses: Observable<House[]>;
    topForSale: Observable<House[]>;
    topForRent: Observable<House[]>;
    btLocation: Observable<BtLocation[]>;
    topAgents: Observable<Agent[]>;
    houses: Observable<House[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private dashboardService: DashboardService,
        private route: ActivatedRoute,
        private router: Router) {}

    //Push一个查询条款到observable流.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.houses = this.searchTerms
            .debounceTime(300)      //事件触发时暂停等待300ms
            .distinctUntilChanged()     //忽略前后两次相同输入
            .switchMap(term => term     //每次切换到新的observable
                //返回http搜索到的observable
                ? this.dashboardService.search(term)
                //或者没有查询条款时返回一个空的agents
                : Observable.of<House[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<House[]>([]);
            });

        this.getNearbyHouses();
        this.getTopForSale();
        this.getTopForRent();
        this.getBtLocation();
        this.getTopAgents();
    }

    ngAfterViewChecked() {
        slickCarousel();
    }

    getNearbyHouses() {
        this.recommendedHouses = this.dashboardService.getNearbyHouses();
    }

    getTopForSale() {
        this.topForSale = this.dashboardService.getTopForSale();
    }

    getTopForRent() {
        this.topForRent = this.dashboardService.getTopForRent();
    }

    getBtLocation() {
        this.btLocation = this.dashboardService.getBtLocation();
    }

    getTopAgents() {
        this.topAgents = this.dashboardService.getTopAgents();
    }


    gotoDetail(arg: any): void {
        this.router.navigate(['[arg.id]', { relativeTo: this.route }]);

    }

    @ViewChild('houseType') houseType: ElementRef;
    loadType(type) {
        this.houseType.nativeElement.innerHTML = type;
    }
}