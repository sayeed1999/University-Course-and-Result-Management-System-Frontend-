import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class GradesService extends RepositoryService {

  constructor(http: HttpClient, acc: AccountService) {
    super(http, acc);
    this.endpoint = "grades";
    this.url += this.endpoint;
  }
}
