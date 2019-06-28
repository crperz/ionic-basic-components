import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild('list') list: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  delete(user) {
    console.log('Delete', user);
  }

  like(user) {
    console.log('Like', user);
    // Close sliding
    this.list.closeSlidingItems();
  }
}
