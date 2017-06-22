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
var router_1 = require("@angular/router");
var agents_list_component_1 = require("./agents-list.component");
var agent_detail_component_1 = require("./agent-detail.component");
var core_1 = require("@angular/core");
var agentsRoutes = [
    { path: '', component: agents_list_component_1.AgentsListComponent },
    { path: 'agent/:id', component: agent_detail_component_1.AgentDetailComponent }
];
var AgentsRoutingModule = (function () {
    function AgentsRoutingModule() {
    }
    AgentsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(agentsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AgentsRoutingModule);
    return AgentsRoutingModule;
}());
exports.AgentsRoutingModule = AgentsRoutingModule;
//# sourceMappingURL=agents-routing.module.js.map