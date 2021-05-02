import { Component, OnInit } from '@angular/core';

import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

interface MenuItem {
  isSelected: boolean;
  link: string;
  title: string;
}

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  menuItems: MenuItem[];

  constructor() {
    moment.locale('pt-br');
  }

  ngOnInit() {
    this.menuItems = [
      {
        isSelected: true,
        link: '/',
        title: 'Início',
      },
      {
        isSelected: false,
        link: '/bookmarks',
        title: 'Favoritos',
      },
    ];
  }

  changeActiveMenu(item: MenuItem) {
    this.clearActivesMenus();
    item.isSelected = true;
  }

  private clearActivesMenus() {
    this.menuItems.forEach((i) => (i.isSelected = false));
  }
}
