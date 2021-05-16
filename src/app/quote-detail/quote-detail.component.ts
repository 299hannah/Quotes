import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
Quote
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

 
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
