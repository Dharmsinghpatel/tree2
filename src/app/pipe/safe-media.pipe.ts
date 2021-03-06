import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeMedia'
})
export class SafeMediaPipe implements PipeTransform {

   constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    // return this.sanitizer.bypassSecurityTrustHtml(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url); //this is for image only
  }

}

// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

// @Pipe({
//   name: 'safehtml'
// })
// export class SafehtmlPipe implements PipeTransform {

//   constructor(private sanitizer: DomSanitizer) { }
//   transform(url) {
//     return this.sanitizer.bypassSecurityTrustHtml(url);
//     // return this.sanitizer.bypassSecurityTrustResourceUrl(url); this is for image only
//   }

// }
