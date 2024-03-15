import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
  standalone: true,
})
export class CreditcardPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Remove non-numeric characters
    const number = value.replace(/\D/g, '');

    // Split into groups of 4 digits
    const parts = number.match(/.{1,4}/g);

    // Join with separators
    return parts?.join(' - ') || '';
  }
}
