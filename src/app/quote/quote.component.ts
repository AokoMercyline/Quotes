import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes:Quote[ ] =[
      new Quote('Procastination is the thief of time','Edward Young ', 'Me',  new Date(2020, 4, 14), 0,0),
      new Quote('Dont be a slave to your emotion.Control them','Buddha', 'Me',  new Date(2020, 4, 14),0,0),
      // new Quote('Whatever is good for your soul.Do that','Aoko Mercyline', 'Me',  new Date(2020, 4, 14),0,0),
      // new Quote('Dont let yesterday take up too much of today','Albert Einstein', 'Me',  new Date(2020, 4, 14),0,0),
      // new Quote('Those who wake up today the future belongs to them','Malcom X', 'Me',  new Date(2020, 4, 14),0,0),
      
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  completeDate(complete: boolean){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
