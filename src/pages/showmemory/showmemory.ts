import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-showmemory',
  templateUrl: 'showmemory.html',
})
export class ShowmemoryPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;


  ci_id : any;
  metric_value : any;
  available: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setInterval((function () {
      this.ionViewDidLoad();
    }).bind(this), 10000);
  }

  ionViewDidLoad() {
    this.  ci_id = this.navParams.get('ci_id');
    this.metric_value = this.navParams.get('metric_value');
    this.available = this.navParams.get('available');
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["usage", "ailable"],
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
