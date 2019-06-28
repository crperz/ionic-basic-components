import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  pages: Page[] = [
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'logo-apple',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'List Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder',
      name: 'List Reorder',
      redirectTo: '/list-reorder'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface Page {
  icon: string;
  name: string;
  redirectTo: string;
}
