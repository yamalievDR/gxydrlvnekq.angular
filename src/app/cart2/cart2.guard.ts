import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Cart2Guard implements CanActivate {
    constructor(private _snackBar: MatSnackBar) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const minutes = new Date().getMinutes();
        if (minutes % 2) {
            return true;
        } else {
            this.openSnackBar(`Now is ${minutes} minutes! Wait for the next one.`);
            return false;
        }
    }

    openSnackBar(message: string) {
        this._snackBar.open(message);
    }
}
