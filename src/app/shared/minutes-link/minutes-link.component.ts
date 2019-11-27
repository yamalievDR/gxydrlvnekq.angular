import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-minutes-link',
  templateUrl: './minutes-link.component.html',
  styleUrls: ['./minutes-link.component.css']
})
export class MinutesLinkComponent implements OnInit {

  currentMinutes$ = interval(1000).pipe(map(() => [`/${new Date().getMinutes()}`]));

  constructor() {
  }

  ngOnInit() {
  }

}
