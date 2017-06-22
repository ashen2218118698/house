/**
 * Created by frontend-huan on 2016/11/26.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AgentsListComponent} from "./agents-list.component";
import {AgentDetailComponent} from "./agent-detail.component";
import {AgentService} from "./agent.service";
import {AgentsRoutingModule} from "./agents-routing.module";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AgentsRoutingModule
    ],
    declarations: [
        AgentsListComponent,
        AgentDetailComponent
    ],
    providers: [
        AgentService
    ]
})
export class AgentsModule {}