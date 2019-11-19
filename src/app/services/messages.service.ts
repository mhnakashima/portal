import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Message } from './../models/message';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  postMessage(value: Message) {
    return this.http.post<Message>(`${environment.apiUrl}/api/message`, value);
  }
}
