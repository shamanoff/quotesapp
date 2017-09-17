import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuote(quote: Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuote(quote: Quote){
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote)=>{
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getQuotes(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotes.find((quoteEl: Quote)=>{
      return quoteEl.id == quote.id;
    });
  }
}
