/**
 * Created by frontend-huan on 2016/12/3.
 */
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {DashboardService} from "./dashboard.service";
import {DashboardRoutingModule} from "./dashboard-routing.module";
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule {}