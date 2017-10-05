import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-url',
  templateUrl: 'url.html',
})
export class UrlPage {

  crons: Observable<any>;
  constructor(public navCtrl: NavController, public http: Http) {
  this.crons = this.http.get('https://sysmon.mcpay.in/api/crons').map(res => res.json());
  }



}
