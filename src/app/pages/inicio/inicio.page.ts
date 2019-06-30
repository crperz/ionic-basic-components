import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Page } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  pages: Observable<Page[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.pages = this.dataService.getMenuOpts();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
