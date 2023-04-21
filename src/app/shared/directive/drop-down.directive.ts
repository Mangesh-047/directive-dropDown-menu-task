import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onclick(eve: Event) {
    // console.log(eve.firstChild as HTMLElement);

    // console.log(eve.target);

    let ele = <HTMLElement>eve.target

    console.log();


    ele.nextElementSibling?.classList.toggle('show')



  }

}
