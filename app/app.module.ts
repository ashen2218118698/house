/**
 * Created by frontend-huan on 2016/11/23.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';

import { AppComponent }   from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import './rxjs-extensions'

import { AgentsModule } from './agent/agents.module';
import { HousesModule } from './house/houses.module';
import {DashboardModule} from "./dashboard/dashboard.module";

import {PageNotFoundComponent} from "./page-not-found.component";
import {InformationComponent} from "./information/information.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AgentsModule,
        HousesModule,
        HttpModule,
        JsonpModule,
        DashboardModule,
        Ng2PageScrollModule
    ],
    declarations: [
        AppComponent,
        InformationComponent,
        PageNotFoundComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

