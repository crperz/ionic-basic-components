import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss']
})
export class ModalInfoPage implements OnInit {
  @Input() name;
  @Input() country;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closeNotArguments() {
    this.modalCtrl.dismiss();
  }

  closeArguments() {
    this.modalCtrl.dismiss({
      name: 'New Name',
      country: 'New Country'
    });
  }
}
