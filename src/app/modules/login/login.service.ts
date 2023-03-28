import { Injectable, Injector } from '@angular/core';
import { of } from 'rxjs';
import { GenericService } from 'src/app/core/generic.service';

@Injectable()
export class LoginService extends GenericService {

  constructor(private injector: Injector) {
    super('auth', injector);
  }

  login(username: string, password: string) {
    // return this.http.post(`${this.url}/login`, { username, password });
    return of({nome: 'admin', token: 'token'});
  }
}
