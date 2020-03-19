import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
  name : 'sqrt',
  pure: false
})
export class CustomPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
        }
}
