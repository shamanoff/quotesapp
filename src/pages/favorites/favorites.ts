import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage  {

  quotes: Quote[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quoteServ: QuotesService,
              private modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.quotes = this.quoteServ.getQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean)=> {
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });

  }

  onRemoveFromFavorites(quote: Quote){
    this.quoteServ.removeQuote(quote);
    this.quotes = this.quoteServ.getQuotes();//rerender the page!!!
  }

}
