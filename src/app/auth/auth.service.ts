import { User } from './User';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { SERVER_NAME } from '../shared/SERVER_CONST';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get(SERVER_NAME + 'users')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}