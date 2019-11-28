import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LastLetterUpperDirective } from './last-letter-upper/last-letter-upper.directive';
import { MinutesLinkComponent } from './minutes-link/minutes-link.component';


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
