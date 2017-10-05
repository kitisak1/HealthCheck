import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ShowdetailPage } from '../showdetail/showdetail';
@IonicPage()
@Component({
  selector: 'page-detailmonitor',
  templateUrl: 'detailmonitor.html',
})
export class DetailmonitorPage {
  crons: Observable<any>;
  constructor(public navCtrl: NavController, public http: Http) {
    this.crons = this.http.get('https://sysmon.mcpay.in/api/crons').map(res => res.json());
    setInterval((function () {
      this.updateDiv();
    }).bind(this), 600000);
  }
  public updateDiv(){
    this.crons = this.http.get('https://sysmon.mcpay.in/api/crons').map(res => res.json());
  }
  public showChart(cron){
    console.log(cron);
    this.navCtrl.push( ShowdetailPage,{
      ci_name: cron.ci_name,
      ExpectResponseTime :cron.expect_response_time ,
      AvgTime:cron.avg_time,
      LowestResponseTime:cron.lowest_response_time,
      HighestResponseTime:cron.highest_response_time,
      PeakTimeCount: cron.peak_time_count

    });
  }
}
