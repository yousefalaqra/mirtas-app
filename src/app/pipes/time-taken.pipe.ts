import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTaken'
})
export class TimeTakenPipe implements PipeTransform {
  transform(startDate?: number, endDate?: number): string {
    if (startDate && endDate) {
      const milliseconds = endDate - startDate;
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      // Format the time in HH:mm:ss format
      return `${this.pad(hours)}:${this.pad(minutes % 60)}:${this.pad(seconds % 60)}`;
    } else {
      return 'N/A';
    }
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
