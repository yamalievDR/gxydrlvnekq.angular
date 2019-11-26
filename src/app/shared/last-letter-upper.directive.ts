import {Directive, ElementRef, OnInit} from '@angular/core';

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

const upperCaseLastLetter = (s: string) => {
  return s.split('').reduce((acc, letter, index) => {
    return index === s.length - 1 ? acc += letter.toUpperCase() : acc += letter;
  });
}
