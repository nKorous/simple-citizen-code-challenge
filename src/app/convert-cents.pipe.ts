import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCents'
})
export class ConvertCentsPipe implements PipeTransform {

  transform(value: number | undefined): string {

    const price = value ? value / 100 : 0.00

    return `$${price}`
  }

}
