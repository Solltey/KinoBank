import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'socialMediaNumber' })
export class SocialMediaNumberPipe implements PipeTransform {
  transform(value: number | undefined): string {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });

    let result = formatter.format(value!);

    return result;
  }
}
