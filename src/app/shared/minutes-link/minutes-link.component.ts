import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    selector: 'app-minutes-link',
    templateUrl: './minutes-link.component.html',
    styleUrls: ['./minutes-link.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinutesLinkComponent {
    currentMinutes$: Observable<number> = timer(0, 1000).pipe(
        map(() => new Date().getMinutes()),
        distinctUntilChanged()
    );
}
