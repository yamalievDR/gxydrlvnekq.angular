import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Cart2Component } from './cart2.component';

const cart2Routes = [{path: '', component: Cart2Component}];

@NgModule({
  declarations: [Cart2Component],
  imports: [
    SharedModule,
    RouterModule.forChild(cart2Routes)
  ],
})
export class Cart2Module {
}
