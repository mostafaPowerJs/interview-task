import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
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
}
