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
var agent_service_1 = require("./agent.service");
var router_1 = require("@angular/router");
require('rxjs/add/operator/switchMap');
var AgentDetailComponent = (function () {
    function AgentDetailComponent(agentService, route) {
        this.agentService = agentService;
        this.route = route;
    }
    Object.defineProperty(AgentDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgentDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgentDetailComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    AgentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.agentService.getAgent(+params['id']); })
            .subscribe(function (agent) { return _this.agent = agent; });
        // let id = +this.route.snapshot.params['id'];
        //
        // this.agentService.getAgent(id)
        //     .then((agent: Agent) => this.agent = agent);
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], AgentDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], AgentDetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], AgentDetailComponent.prototype, "position", null);
    AgentDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'agent-detail.component.html',
            styleUrls: ['agent-detail.component.css'],
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition(':enter', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.2s ease-in')
                    ]),
                    core_1.transition(':leave', [
                        core_1.animate('0.5s ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [agent_service_1.AgentService, router_1.ActivatedRoute])
    ], AgentDetailComponent);
    return AgentDetailComponent;
}());
exports.AgentDetailComponent = AgentDetailComponent;
//# sourceMappingURL=agent-detail.component.js.map