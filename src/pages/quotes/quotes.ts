import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private quotesServ: QuotesService) {
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are You Sure?',
      message: 'Are you sure want to add the quote?',
      // buttons: ['Ok']
      buttons: [
        {text: 'Yes',
        handler: ()=> {
          this.quotesServ.addQuote(selQuote);
        }},
        {text: 'No',
          role: 'cancel',
          handler: ()=> {console.log('Cancelled')}}
      ]
    });

    alert.present();
  }

  onRemoveFromFav(quote: Quote){
    this.quotesServ.removeQuote(quote);
  }

  isFavorite(quote: Quote){
    return this.quotesServ.isQuoteFavorite(quote);
  }

}
