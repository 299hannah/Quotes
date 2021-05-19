import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
Quote
@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {


  newQuote = new Quote(0,"","","", new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","", new Date(),0,0);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
