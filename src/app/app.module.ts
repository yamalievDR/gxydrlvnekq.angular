import { NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Cart2Guard } from './cart2/cart2.guard';
import { HomeComponent } from './home/home.component';
import { MinutePageComponent } from './minute-page/minute-page.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Route[] = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
    {path: 'cart2', loadChildren: './cart2/cart2.module#Cart2Module', canActivate: [Cart2Guard]},
    {path: ':minute', component: MinutePageComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
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
