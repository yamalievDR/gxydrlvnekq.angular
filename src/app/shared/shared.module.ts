import {NgModule} from '@angular/core';
import {LastLetterUpperDirective} from './last-letter-upper/last-letter-upper.directive';
import { MinutesLinkComponent } from './minutes-link/minutes-link.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [LastLetterUpperDirective, MinutesLinkComponent],
    declarations: [LastLetterUpperDirective, MinutesLinkComponent],
    providers: [],
})
export class SharedModule {
}
