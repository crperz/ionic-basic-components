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
