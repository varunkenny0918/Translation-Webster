import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import JSZip from 'jszip';
import { TranslateService } from '../services/translate.service';

@Directive({
  selector: '[appDynamicJsonFile]'
})
export class DynamicJsonFileDirective {
  @Input() InputText : any = []
  @Input() fileName: string | undefined;
  @Input() targetLanguage !: string
  constructor(private el: ElementRef, private renderer: Renderer2, private translateService : TranslateService) { }

  @HostListener('click')
generateJsonFile() {
  const content = this.InputText;
  console.log(content);
  
  const values: string[]=content.split(',').map((value: string) => value.trim());

  // const translations = {};
  const translations: { [key: string]: string } = {};
  const targetLanguage = this.targetLanguage ;
  // Translate each key and add it to the translations object
  forkJoin(
    values.map(value => this.translateService.translateText(value, targetLanguage))
  ).subscribe(translatedKeys => {
    values.forEach((value, index) => {
      translations[value] = translatedKeys[index];
    });

    const jsonBlob = new Blob([JSON.stringify(translations, null, 2)], { type: 'application/json' });
    const downloadFileName = this.fileName || 'dynamic-file.json';

    const downloadLink = this.renderer.createElement('a');
    this.renderer.setAttribute(downloadLink, 'href', URL.createObjectURL(jsonBlob));
    this.renderer.setAttribute(downloadLink, 'download', downloadFileName);
    this.renderer.appendChild(document.body, downloadLink);
    downloadLink.click();
    this.renderer.removeChild(document.body, downloadLink);
  });
}
}

