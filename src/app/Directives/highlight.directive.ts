import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {}
  //@Input() quantity!: number;
  @Input() set quantity(value: number) {
    if (value == 1) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
  }
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.boxShadow =
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
