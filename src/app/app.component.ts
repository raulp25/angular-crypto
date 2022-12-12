import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: string = 'USD';
  constructor(private CurrencyService : CurrencyService) {}

  sendCurrency(e:string) {
    console.log(e);
    this.CurrencyService.setCurrency(e)
  }
}
