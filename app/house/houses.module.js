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
 * Created by frontend-huan on 2016/11/26.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var houses_list_component_1 = require("./houses-list.component");
var house_detail_component_1 = require("./house-detail.component");
var house_service_1 = require("./house.service");
var houses_routing_module_1 = require("./houses-routing.module");
var HousesModule = (function () {
    function HousesModule() {
    }
    HousesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                houses_routing_module_1.HousesRoutingModule
            ],
            declarations: [
                houses_list_component_1.HousesListComponent,
                house_detail_component_1.HouseDetailComponent,
            ],
            providers: [
                house_service_1.HouseService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HousesModule);
    return HousesModule;
}());
exports.HousesModule = HousesModule;
//# sourceMappingURL=houses.module.js.map