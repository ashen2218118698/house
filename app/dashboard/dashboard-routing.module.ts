/**
 * Created by frontend-huan on 2016/12/13.
 */
import {Routes, RouterModule} from "@angular/router";
import {AgentsListComponent} from "../agent/agents-list.component";
import {AgentDetailComponent} from "../agent/agent-detail.component";
import {HousesListComponent} from "../house/houses-list.component";
import {HouseDetailComponent} from "../house/house-detail.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'agents', component: AgentsListComponent },
    { path: 'agent/:id', component: AgentDetailComponent },
    { path: 'houses', component: HousesListComponent },
    { path: 'house/:id', component: HouseDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule {}