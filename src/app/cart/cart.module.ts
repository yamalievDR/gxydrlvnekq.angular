import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';

const cartRoutes = [{path: '', component: CartComponent}];

@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class CartModule {
}
