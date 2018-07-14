import {Directive, HostListener, HostBinding, ElementRef} from "@angular/core";

@Directive({
  selector: '[appDropdown]',
  host: {
    '(document:click)': 'handleClick($event)'
  }
})
export class DropdownDirective {

  @HostBinding('class.show')
  isOpen = false;

  constructor(private elRef:ElementRef) {


  }


  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let submenu = this.elRef.nativeElement.querySelector('.dropdown-menu')
    if(this.isOpen) {
      submenu.classList.add("show")
    } else {
      submenu.classList.remove("show")
    }

  }


  handleClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      setTimeout(() => {
        let submenu = this.elRef.nativeElement.querySelector('.dropdown-menu')
        submenu.classList.remove("show")
      }, 50);
    }
  }
}
