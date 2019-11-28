import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LastLetterUpperDirective } from './last-letter-upper/last-letter-upper.directive';
import { MinutesLinkComponent } from './minutes-link/minutes-link.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MatSnackBarModule,
    ],
    declarations: [LastLetterUpperDirective, MinutesLinkComponent],
    exports: [CommonModule, LastLetterUpperDirective, MinutesLinkComponent, MatSnackBarModule],
})
export class SharedModule {
}
