import { Directive, ElementRef, OnInit } from '@angular/core';
import { upperCaseLastLetter } from '../utils/upper-case-last-letter';

@Directive({
    selector: '[appLastLetterUpper]'
})
export class LastLetterUpperDirective implements OnInit {

    constructor(private elem: ElementRef) {
    }

    ngOnInit() {
        this.elem.nativeElement.innerText = upperCaseLastLetter(this.elem.nativeElement.innerText);
    }
}
