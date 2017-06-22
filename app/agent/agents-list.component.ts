/**
 * Created by frontend-huan on 2016/11/24.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Agent} from "./agent";
import {AgentService} from "./agent.service";
import {Observable} from "rxjs";
@Component({
    moduleId: module.id,
    templateUrl: 'agents-list.component.html',
    styleUrls: [ 'agents-list.component.css' ]
})
export class AgentsListComponent implements OnInit{
    errorMessage: string;
    agents: Observable<Agent[]>;

    constructor(
       private router: Router,
       private agentService: AgentService
    ) {}

    ngOnInit() {
        this.getAgents();
    }

    getAgents() {
        this.agents = this.agentService.getAgents();
    }

    onSelect(agent: Agent) {
        this.router.navigate(['/agent', agent.id]);
    }
}