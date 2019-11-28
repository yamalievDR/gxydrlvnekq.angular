import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

@Component({
    selector: 'app-minute-page',
    templateUrl: './minute-page.component.html',
    styleUrls: ['./minute-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinutePageComponent {

    openedMinute$: Observable<string> = this.activatedRoute.params.pipe(
        filter(params => params['minute']),
        pluck('minute')
    );

    constructor(private activatedRoute: ActivatedRoute) {
    }
}
