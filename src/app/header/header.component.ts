import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';
import { CurrencyResponse } from '../currency-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdToUah: number = 0;
  eurToUah: number = 0;
  cnyToUah: number = 0;

  constructor(private currency: CurrencyapidataService) { }

  ngOnInit(): void {
    this.getCurrencyRates();
  }

  getCurrencyRates() {
    this.currency.getcurrencydata('UAH').subscribe((data: CurrencyResponse) => {
      this.usdToUah = 1 / data.rates.USD;
      this.eurToUah = 1 / data.rates.EUR;
      this.cnyToUah = 1 / data.rates.CNY;
    });
  }
}
