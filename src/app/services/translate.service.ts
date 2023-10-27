import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private apiKey = 'AIzaSyBJmVOIeH1fjtmz_a7Hog2eSHV_T8V8OJw'; // Replace with your API key
  private translateUrl = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) {}

  translateText(text: string, targetLanguage: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', text)
      .set('target', targetLanguage);

    return this.http.post<any>(this.translateUrl, {}, { params, headers })
      .pipe(map(response => response.data.translations[0].translatedText));
  }
}



