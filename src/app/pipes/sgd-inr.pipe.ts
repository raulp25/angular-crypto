import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'sgdInr'
})
export class SgdInrPipe implements PipeTransform {

  transform(num: number, currencyCode: string, showSymbol: boolean, digits: string): any {
    let value = new CurrencyPipe(navigator.language).transform(num, currencyCode, showSymbol, digits);
    let firstDigit = value?.match(/\d/);
    let symbol = value?.slice(0, firstDigit?.index);
    let amount = value?.slice(firstDigit?.index);   
    return symbol + " " + amount;
}

}

