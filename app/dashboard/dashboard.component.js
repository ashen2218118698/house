"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by frontend-huan on 2016/11/24.
 */
var core_1 = require("@angular/core");
var dashboard_service_1 = require("./dashboard.service");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, route, router) {
        this.dashboardService = dashboardService;
        this.route = route;
        this.router = router;
        this.searchTerms = new rxjs_1.Subject();
    }
    //Push一个查询条款到observable流.
    DashboardComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.houses = this.searchTerms
            .debounceTime(300) //事件触发时暂停等待300ms
            .distinctUntilChanged() //忽略前后两次相同输入
            .switchMap(function (term) { return term //每次切换到新的observable
            ? _this.dashboardService.search(term)
            : rxjs_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return rxjs_1.Observable.of([]);
        });
        this.getNearbyHouses();
        this.getTopForSale();
        this.getTopForRent();
        this.getBtLocation();
        this.getTopAgents();
    };
    DashboardComponent.prototype.ngAfterViewChecked = function () {
        slickCarousel();
    };
    DashboardComponent.prototype.getNearbyHouses = function () {
        this.recommendedHouses = this.dashboardService.getNearbyHouses();
    };
    DashboardComponent.prototype.getTopForSale = function () {
        this.topForSale = this.dashboardService.getTopForSale();
    };
    DashboardComponent.prototype.getTopForRent = function () {
        this.topForRent = this.dashboardService.getTopForRent();
    };
    DashboardComponent.prototype.getBtLocation = function () {
        this.btLocation = this.dashboardService.getBtLocation();
    };
    DashboardComponent.prototype.getTopAgents = function () {
        this.topAgents = this.dashboardService.getTopAgents();
    };
    DashboardComponent.prototype.gotoDetail = function (arg) {
        this.router.navigate(['[arg.id]', { relativeTo: this.route }]);
    };
    DashboardComponent.prototype.loadType = function (type) {
        this.houseType.nativeElement.innerHTML = type;
    };
    __decorate([
        core_1.ViewChild('houseType'), 
        __metadata('design:type', core_1.ElementRef)
    ], DashboardComponent.prototype, "houseType", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService, router_1.ActivatedRoute, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map