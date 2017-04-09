import { User } from './User';
import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
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

    addUser(_user: User): Observable<User> {
        let body = JSON.stringify(_user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(SERVER_NAME + 'users', body, options)
            .map(res => <User>res.json())
            .catch(this.handleError);
    }

    editUser(_newUser: User): Observable<User> {
        let body = JSON.stringify(_newUser);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(SERVER_NAME + 'users', body, options)
            .map(res => <User>res.json())
            .catch(this.handleError);
    }

    private handleError(err: any): Observable<string> {
        let message: string;
        if (err.message) {
            message = err.message;
        } else {
            message = (err.status) ?
                `${err.status} : ${err.statusText}` :
                'Server connection error';
        }

        console.error(message);
        return Observable.throw(message);
    }
}