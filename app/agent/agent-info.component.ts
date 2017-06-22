/**
 * Created by frontend-huan on 2016/12/18.
 */
import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import {Agent} from "./agent";
import {AgentService} from "./agent.service";
@Component({
    moduleId: module.id,
    templateUrl: 'agent-info.component.html',
    styleUrls: [ 'agent-info.component.css' ]
})

export class AgentInfoComponent implements OnInit{
    agent: Agent;

    constructor(
        private agentService: AgentService,
        private route: ActivatedRoute
    ) {}

    ngOnInit():void {
        this.route.params
            .switchMap((params: Params) => this.agentService.getAgent(+params['id']))
            .subscribe((agent: Agent) => this.agent = agent);
    }
}