import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
}
