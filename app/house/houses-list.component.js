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
var router_1 = require("@angular/router");
var house_service_1 = require("./house.service");
var HousesListComponent = (function () {
    function HousesListComponent(router, route, houseService) {
        this.router = router;
        this.route = route;
        this.houseService = houseService;
    }
    HousesListComponent.prototype.ngOnInit = function () {
        this.getHouses();
    };
    HousesListComponent.prototype.getHouses = function () {
        this.houses = this.houseService.getHouses();
    };
    HousesListComponent.prototype.gotoDetail = function (house) {
        this.router.navigate(['[house.id]', { relativeTo: this.route }]);
    };
    HousesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'houses-list.component.html',
            styleUrls: ['houses-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, house_service_1.HouseService])
    ], HousesListComponent);
    return HousesListComponent;
}());
exports.HousesListComponent = HousesListComponent;
//# sourceMappingURL=houses-list.component.js.map