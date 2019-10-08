import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(delayed: boolean): string {
    return delayed ? 'red' : 'green';
  }

}
