/**
 * Created by frontend-huan on 2016/11/24.
 */
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs";

import { Agent } from "./agent";

@Injectable()
export class AgentService {
    private agentsUrl = 'app/data/get-all-agents.php';
    private agentUrl = 'app/data/get-agent-by-id.php';

    constructor(private http: Http){}

    search(term: string): Observable<Agent[]> {
        return this.http
            .get(`app/data/get-agents-by-name.php?name=${term}`)
            .map((r: Response) => r.json().data as Agent[]);
    }

    getAgents(): Observable<Agent[]> {
        return this.http.get(this.agentsUrl)
                   .map((res: Response) => res.json());
    }

    getAgent(id: number): Observable<Agent> {
        return this.http.get(`${this.agentUrl}/${id}`)
                   .map((res: Response) => res.json());
    }
}