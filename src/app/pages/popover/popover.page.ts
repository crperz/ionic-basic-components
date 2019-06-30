import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage implements OnInit {
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  async presentPop(event: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    // When popover will close (Quick)
    const { data } = await popover.onWillDismiss();
    // Wait until popover is closed
    // const { data } = await popover.onDidDismiss();
    console.log(data);
  }
}
