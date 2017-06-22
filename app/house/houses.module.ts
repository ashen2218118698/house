/**
 * Created by frontend-huan on 2016/11/26.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HousesListComponent} from "./houses-list.component";
import {HouseDetailComponent} from "./house-detail.component";
import {HouseService} from "./house.service";
import {HousesRoutingModule} from "./houses-routing.module";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HousesRoutingModule
    ],
    declarations: [
        HousesListComponent,
        HouseDetailComponent,
    ],
    providers: [
        HouseService
    ]
})
export class HousesModule {}