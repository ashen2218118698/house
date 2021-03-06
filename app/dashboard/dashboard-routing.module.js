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
 * Created by frontend-huan on 2016/12/13.
 */
var router_1 = require("@angular/router");
var agents_list_component_1 = require("../agent/agents-list.component");
var agent_detail_component_1 = require("../agent/agent-detail.component");
var houses_list_component_1 = require("../house/houses-list.component");
var house_detail_component_1 = require("../house/house-detail.component");
var core_1 = require("@angular/core");
var dashboard_component_1 = require("./dashboard.component");
var dashboardRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'agents', component: agents_list_component_1.AgentsListComponent },
    { path: 'agent/:id', component: agent_detail_component_1.AgentDetailComponent },
    { path: 'houses', component: houses_list_component_1.HousesListComponent },
    { path: 'house/:id', component: house_detail_component_1.HouseDetailComponent }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(dashboardRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=dashboard-routing.module.js.map