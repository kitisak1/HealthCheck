import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowmemoryPage } from '../showmemory/showmemory';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ShowdiskPage } from '../showdisk/showdisk';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-diskmemory',
  templateUrl: 'diskmemory.html',
})
export class DiskmemoryPage {
  crons: Observable<any>;

  objs : any = JSON.parse('{"status":[{"ci_name":"Google","status":"1"},{"ci_name":"Laravel","status":"1"}],"response_time":[{"ci_name":"Google","expect_response_time":"2","avg_response_time":"0.27","lowest_response_time":"0.13","highest_response_time":"0.94","peak_time_count":"0","peak_time_results":""},{"ci_name":"Laravel","expect_response_time":"2","avg_response_time":"1.21","lowest_response_time":"0.48","highest_response_time":"3.38","peak_time_count":"1","peak_time_results":"Time : 15:39:04 \/ Response Time : 3.375, "}],"disks":[{"ci_id":"CheckStorageSV1","path":"\/","metric_name":"usage","metric_value":"90"},{"ci_id":"CheckStorageSV2","path":"\/var\/log","metric_name":"usage","metric_value":"1"}],"memory":[{"ci_id":"TestCheckMemory","metric_name":"usage","metric_value":"18"}]}');
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public alertCtrl: AlertController) {
    this.updateDiv() ;
    console.log(this.objs.disks);
    console.log(this.objs.memory.ci_id);
if(this.objs.memory.metric_value >=80){
    this.presentAlert(this.objs.metric_value);
}
  console.log();
if(80 >=80){

    this.presentdisk();
}
    setInterval((function () {
      this.updateDiv();
    }).bind(this), 600000);
  }







  public updateDiv(){
    this.crons = this.http.get('https://sysmon.mcpay.in/api/crons').map(res => res.json());
  }



  public showChart(obj){
    this.navCtrl.push( ShowmemoryPage,{
      ci_id : obj.ci_id,
      metric_value :obj.metric_value,
      available: 100 - obj.metric_value
    });
  }



  public showdisk(obj){
    this.navCtrl.push( ShowdiskPage,{
      ci_id : obj.ci_id,
      metric_value :obj.metric_value ,
      available : (100 - obj.metric_value ),

    });
  }
















presentAlert(m) {
const alert = this.alertCtrl.create({
  title: 'memory',
  subTitle:'usage > 80%',
  buttons: ['OK']
});
alert.present();
}
presentdisk() {
const alert = this.alertCtrl.create({
  title: 'disk',
  subTitle: 'usage > 80%',
  buttons: ['OK']
});
alert.present();
}
}
