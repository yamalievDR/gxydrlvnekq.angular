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

const upperCaseLastLetter = (s: string): string => {
  if(s) {
    const lastLetter = s.charAt(s.length - 1);
    const restText = s.substring(0, s.length - 1);
    return restText + lastLetter.toUpperCase();
  }
  return s;
};
