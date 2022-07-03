import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{

    @HostBinding('class.open') isOpne = false;

    @HostListener('click') toggleOpen(){
        this.isOpne = !this.isOpne;
    }
}