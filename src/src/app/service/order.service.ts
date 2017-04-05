import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { Order } from '../class/Order';
import { Utility } from '../class/Utility';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class OrderService {

    constructor() {

    }

    //Save new order
    public save(order: Order): Observable<boolean> {
        //TODO:Implement the save function here
        return Observable.of(true);
    }




}

