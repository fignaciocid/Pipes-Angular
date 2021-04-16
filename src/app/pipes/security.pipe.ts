import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'security'
})
export class SecurityPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = false): string {

    return (mostrar) ? '*'.repeat(value.length) : value;    
  }

}
