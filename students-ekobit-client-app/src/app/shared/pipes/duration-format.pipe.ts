import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'durationFormat',
  pure: false
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    
    if (hours >= 1) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`
    }
  }
}
