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
 * Created by frontend-huan on 2016/12/18.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var agent_service_1 = require("./agent.service");
var AgentInfoComponent = (function () {
    function AgentInfoComponent(agentService, route) {
        this.agentService = agentService;
        this.route = route;
    }
    AgentInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.agentService.getAgent(+params['id']); })
            .subscribe(function (agent) { return _this.agent = agent; });
    };
    AgentInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'agent-info.component.html',
            styleUrls: ['agent-info.component.css']
        }), 
        __metadata('design:paramtypes', [agent_service_1.AgentService, router_1.ActivatedRoute])
    ], AgentInfoComponent);
    return AgentInfoComponent;
}());
exports.AgentInfoComponent = AgentInfoComponent;
//# sourceMappingURL=agent-info.component.js.map