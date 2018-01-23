import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogsService {

  constructor(private http: HttpClient) {
  }

  public fetch(originator: string) {
    
  }

}
