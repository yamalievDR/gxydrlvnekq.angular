import {NgModule} from '@angular/core';
import {LastLetterUpperDirective} from './last-letter-upper/last-letter-upper.directive';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MinutesLinkComponent} from "./minutes-link/minutes-link.component";


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [LastLetterUpperDirective, MinutesLinkComponent],
    declarations: [LastLetterUpperDirective, MinutesLinkComponent],
})
export class SharedModule {
}
