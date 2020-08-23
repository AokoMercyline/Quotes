import { Component, OnInit, EventEmitter , Output, Input} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  upVote(quote){
    this.quote.upVote++
  }
  downVote(quote){
    this.quote.downVote++
  }

  constructor() { }

  ngOnInit(){

  }


}
