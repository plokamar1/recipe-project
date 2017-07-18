import {Directive, HostBinding, HostListener} from "@angular/core";
@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') ifOpen = false;

  @HostListener('mouseclick') mouseclick(eventData: Event) {
    if (this.ifOpen) {
      this.ifOpen = false;
    } else {
      this.ifOpen = true;
    }
  }
}
