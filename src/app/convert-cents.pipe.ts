import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCents'
})
export class ConvertCentsPipe implements PipeTransform {

  transform(value: number | undefined): string {

    const price = value !== undefined ? value / 100 : 0

    return `$${price}`
  }

}
