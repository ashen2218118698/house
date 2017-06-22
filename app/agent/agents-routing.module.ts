/**
 * Created by frontend-huan on 2016/11/26.
 */
import {Routes, RouterModule} from "@angular/router";
import {AgentsListComponent} from "./agents-list.component";
import {AgentDetailComponent} from "./agent-detail.component";
import {NgModule} from "@angular/core";

const agentsRoutes: Routes = [
    { path: '', component: AgentsListComponent },
    { path: 'agent/:id', component: AgentDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(agentsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AgentsRoutingModule {}