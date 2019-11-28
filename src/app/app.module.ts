import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { Cart2Guard } from './cart2/cart2.guard';
import { HomeComponent } from './home/home.component';
import { MinutePageComponent } from './minute-page/minute-page.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Route[] = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'cart2', component: Cart2Component, canActivate: [Cart2Guard]},
    {path: ':minute', component: MinutePageComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        MatSnackBarModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        CartComponent,
        Cart2Component,
        HomeComponent,
        MinutePageComponent
    ],
    providers: [
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
