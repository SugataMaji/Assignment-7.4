import { Directive,ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor() { }
@HostBinding('style.color') c_colorrr = "blue";
@HostListener('mouseenter') dosomething(){
this.c_colorrr="red";
}
@HostListener('mouseleave') dosomething1(){
this.c_colorrr="black";
}
}
