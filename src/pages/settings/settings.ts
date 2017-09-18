import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingService} from '../../services/setting.service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private setStng: SettingService) {
  }

  onToggle(toggle: Toggle){
    this.setStng.setBg(toggle.checked);
  }

  checkAltBg(){
    return this.setStng.isAltBg();
  }
}
