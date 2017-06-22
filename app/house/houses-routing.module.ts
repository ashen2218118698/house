/**
 * Created by frontend-huan on 2016/11/26.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HousesListComponent} from "./houses-list.component";
import {HouseDetailComponent} from "./house-detail.component";

const housesRoutes: Routes = [
    { path: 'houses', component: HousesListComponent },
    { path: 'house/:id', component: HouseDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(housesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HousesRoutingModule {}