import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterspecialchar'
})
export class FilterspecialcharPipe implements PipeTransform {

  transform(value: string): string {
    let newVal = value.replace(/[^\w\s]/gi, '')
    return newVal;//.charAt(1).toUpperCase() + newVal.slice(2);
  }

}
