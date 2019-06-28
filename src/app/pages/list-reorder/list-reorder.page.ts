import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss']
})
export class ListReorderPage implements OnInit {
  characters = ['Aquaman', 'Batman', 'Superman', 'Flash', 'Deadpool'];

  constructor() {}

  ngOnInit() {}

  reorder({ detail }) {
    const item = this.characters.splice(detail.from, 1)[0];
    this.characters.splice(detail.to, 0, item);
    detail.complete();
  }
}
