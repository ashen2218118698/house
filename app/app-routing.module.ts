/**
 * Created by frontend-huan on 2016/11/26.
 */
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InformationComponent} from "./information/information.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {NgModule} from "@angular/core";
import {HousesListComponent} from "./house/houses-list.component";
import {AgentsListComponent} from "./agent/agents-list.component";
import {HouseDetailComponent} from "./house/house-detail.component";
import {AgentDetailComponent} from "./agent/agent-detail.component";
const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'houses', component: HousesListComponent },
    { path: 'agents', component: AgentsListComponent },
    { path: 'house:id', component: HouseDetailComponent },
    { path: 'agent:id', component: AgentDetailComponent },
    { path: 'information', component: InformationComponent },
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}