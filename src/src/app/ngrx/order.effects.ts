import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShopItem } from '../class/ShopItem';
import { Order } from '../class/Order';
import { SAVE, SAVED, CANCEL, CANCELLED, COMPLETE } from './order.action';
import { OrderService } from '../service/order.service';
import { AppUtility } from '../class/AppUtility';
import { OrderAction } from '../class/OrderAction';


@Injectable()
export class orderEffects {

    constructor(
        private action$: Actions,
        private orderService: OrderService
    ) { }


    @Effect() save$ = this.action$
        .ofType(SAVE)
        .switchMap((action) => {

            let oa = <OrderAction>action;
            oa.payload.id = AppUtility.generateUUID();
            oa.payload.status = SAVED;

            //Save the order to backend, database ...etc Or get something
            let create$ = Observable.fromPromise(this.orderService.create(oa.payload));
            return create$.delay(1000).switchMap(() => {
                return Observable.of({ 'type': SAVED, 'payload': oa.payload });
            });

        });

    @Effect() saved$ = this.action$
        .ofType(SAVED).delay(1000)
        .switchMap((action) => {
            let oa = <OrderAction>action;
            oa.payload.status = COMPLETE;
            return Observable.of({ 'type': COMPLETE, 'payload': oa.payload });
        });
}
