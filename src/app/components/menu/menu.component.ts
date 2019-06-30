import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Page } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pages: Observable<Page[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.pages = this.dataService.getMenuOpts();
  }
}
