import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-showdetail',
  templateUrl: 'showdetail.html',
})
export class ShowdetailPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  cron:any;
ci_name: string ;
  ExpectResponseTime : any;
  AvgTime : any;
  LowestResponseTime:any;
  HighestResponseTime:any;
  PeakTimeCount:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    setInterval((function () {
      this.ionViewDidLoad();
    }).bind(this), 600000);
  }
  ionViewDidLoad() {
    this.ci_name = this.navParams.get('ci_name');
    this.ExpectResponseTime = this.navParams.get('ExpectResponseTime');
    this.AvgTime = this.navParams.get('AvgTime');
    this.LowestResponseTime = this.navParams.get('LowestResponseTime');
    this.HighestResponseTime = this.navParams.get('HighestResponseTime');
    this.PeakTimeCount = this.navParams.get('PeakTimeCount');
this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [ "ERT","AT", "LRT", "HRT", "PTC"],
        datasets: [{
          label: this.ci_name,
          data: [this.ExpectResponseTime,this.AvgTime, this.LowestResponseTime,this.HighestResponseTime, this.PeakTimeCount],
          backgroundColor: [
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)'
          ],
          borderColor: [
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
            'rgb(148, 253, 252)',
          ],
          borderWidth: 1
        }]
      },
    });
  }
}
