/**
 * Created by frontend-huan on 2016/11/23.
 */
import {Component} from '@angular/core';
import {PageScrollService} from "ng2-page-scroll/ng2-page-scroll";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ],
    providers: [ PageScrollService ]
})
export class AppComponent {
    isToggled: false;
    isOpen: false;

    over(event) {
        event.target.offsetParent.classList.add('active');
        setTimeout(() => {
            event.target.nextElementSibling.hidden = false;
        },150);
    }
    leave(event) {
        event.target.classList.remove('active');
        setTimeout(() => {
            event.target.lastElementChild.hidden = true;
        },300);
    }
}
