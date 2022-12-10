import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  switch:boolean = true;
 
  ngOnInit(): void {
    const str = window.location.href;
const seif = str.split(/[\s/]+/)
const last = seif[seif.length - 1]
if( last == 'orders'){
this.switch = false
}  
  }

  itemsNav = [
    {
      nameItem : 'ClickTik',
      img : '01.png'
    },
    {
      nameItem : 'Home',
      img : null
    }
  ]

  ngOnDestroy() {
    this.switch = true
  }
}
