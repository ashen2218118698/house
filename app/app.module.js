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
 * Created by frontend-huan on 2016/11/23.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_page_scroll_1 = require('ng2-page-scroll/ng2-page-scroll');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require("./app-routing.module");
require('./rxjs-extensions');
var agents_module_1 = require('./agent/agents.module');
var houses_module_1 = require('./house/houses.module');
var dashboard_module_1 = require("./dashboard/dashboard.module");
var page_not_found_component_1 = require("./page-not-found.component");
var information_component_1 = require("./information/information.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                agents_module_1.AgentsModule,
                houses_module_1.HousesModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                dashboard_module_1.DashboardModule,
                ng2_page_scroll_1.Ng2PageScrollModule
            ],
            declarations: [
                app_component_1.AppComponent,
                information_component_1.InformationComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map