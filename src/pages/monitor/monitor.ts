import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html',
})
export class MonitorPage {
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
}
