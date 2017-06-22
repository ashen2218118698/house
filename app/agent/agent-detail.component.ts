/**
 * Created by frontend-huan on 2016/11/24.
 */
import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from "@angular/core";
import {Agent} from "./agent";
import {AgentService} from "./agent.service";
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';
@Component({
    moduleId: module.id,
    templateUrl: 'agent-detail.component.html',
    styleUrls: [ 'agent-detail.component.css' ],
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class AgentDetailComponent implements OnInit{
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    agent: Agent;

    constructor(
       private agentService: AgentService,
       private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.agentService.getAgent(+params['id']))
            .subscribe((agent: Agent) => this.agent = agent);
        // let id = +this.route.snapshot.params['id'];
        //
        // this.agentService.getAgent(id)
        //     .then((agent: Agent) => this.agent = agent);
    }
}