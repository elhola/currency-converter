import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

interface CurrencyInfo {
  code: string;
  name: string;
  shortCode: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mycurrency';
  currjson: any = [];

  base: string = 'USD';
  cont2: string = 'USD';
  amount: number = 1;
  result: string = '1';

  currencies: CurrencyInfo[] = [
    { code: 'USD', name: 'United States Dollar', shortCode: 'USD' },
    { code: 'EUR', name: 'Euro', shortCode: 'EUR' },
    { code: 'UAH', name: 'Ukrainian Hryvnia', shortCode: 'UAH' },
    { code: 'CNY', name: 'Chinese Yuan', shortCode: 'CNY' },
  ];

  constructor(private currency: CurrencyapidataService) { }

  changeBase(a: string) {
    this.base = a;
    this.convert();
  }

  toCountry(b: string) {
    this.cont2 = b;
    this.convert();
  }

  getCurrenyName(currencyCode: string): string {
    const currencyInfo = this.currencies.find((currency) => currency.code === currencyCode);
    return currencyInfo ? currencyInfo.name : '';
  }

  getCurrenyShortCode(currencyCode: string): string {
    const currencyInfo = this.currencies.find((currency) => currency.code === currencyCode);
    return currencyInfo ? currencyInfo.shortCode : '';
  }

  onAmountChange() {
    this.convert();
  }

  convert() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);

      if (this.cont2 == 'USD') {
        this.result = (this.amount * this.currjson.rates.USD).toFixed(2);
      }
      if (this.cont2 == 'UAH') {
        this.result = (this.amount * this.currjson.rates.UAH).toFixed(2);
      }
      if (this.cont2 == 'EUR') {
        this.result = (this.amount * this.currjson.rates.EUR).toFixed(2);
      }
      if (this.cont2 == 'CNY') {
        this.result = (this.amount * this.currjson.rates.CNY).toFixed(2);
      }
    });
  }
}
