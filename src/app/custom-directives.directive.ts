import { Directive, ElementRef , HostListener  } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {
     constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
      this.highlight('red');
    }

  @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

  private highlight(color: string) {
      this.el.nativeElement.style.color = color;
    }
  }
