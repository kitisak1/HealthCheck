import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-showdisk',
  templateUrl: 'showdisk.html',
})
export class ShowdiskPage {

      @ViewChild('doughnutCanvas') doughnutCanvas;
    doughnutChart: any;
    cron:any;
    name : string ;
    metric_value : any;
    available : any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      setInterval((function () {
        this.presentAlert()
        this.ionViewDidLoad();
      }).bind(this), 600000);
    }

    ionViewDidLoad() {

      this.name = this.navParams.get('name');
      this.metric_value = this.navParams.get('metric_value');
      this.available = this.navParams.get('available');
    
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ["usage", "available"],
          datasets: [{
            label: '# of Votes',
            data: [this.metric_value, this.available],
            backgroundColor: [
              "#FF3399",
              "#36A2EB"
            ],
            hoverBackgroundColor: [
              "#FF3399",
              "#36A2EB"
            ]
          }]
        }
      });
    }
}
