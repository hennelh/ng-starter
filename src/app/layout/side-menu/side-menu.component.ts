import { Component } from '@angular/core';

export interface NavItem {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})


export class SideMenuComponent {
  navItems: NavItem[] = [
    {
      name: 'WELCOME',
      url: '/',
      icon: 'home'
    },
    {
      name: 'USERS',
      url: '/users',
      icon: 'account_circle'
    }
  ];
  constructor() { }

}
