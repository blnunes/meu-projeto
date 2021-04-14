import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit{

  @Input('fontSize') fontSize: any;

  constructor(private element: ElementRef) { }

  @HostListener('click') onClick(): any {
    alert('YOU CLICK ME');
  }

  ngOnInit() {
    this.element.nativeElement.style.fontSize = '100px'
    this.element.nativeElement.style.backgroundColor =  'pink';
    this.element.nativeElement.textContent = 'Bruno';
    console.log(this.element.nativeElement.fontSize);
    // this.element.nativeElement.hidden = true;
    // this.element.nativeElement.width = 300;
  }
}
