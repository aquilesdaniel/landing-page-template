import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  messasge: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private endPointUrl =
    'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws';
  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = { name, email };

    return this.http.post<NewsletterResponse>(this.endPointUrl, data);
  }
}
