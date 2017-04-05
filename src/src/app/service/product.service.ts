import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { Product } from '../class/Product';
import { ProductType } from '../class/ProductType';
import { Utility } from '../class/Utility';
import { EnumEx } from '../enum/EnumEx';
import { ProdTypeEnum } from '../enum/ProdTypeEnum';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class ProductService {

  private httpOptions: RequestOptions;

  constructor(private http: Http) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.httpOptions = new RequestOptions({ headers: headers });

  }


  //Get Product types list
  public getProductTypes() {
    let prodTypes: ProductType[] = [];

    //Get name-value pairs from ProductTypeEnum
    let prodTypeEnumList = EnumEx.getNamesAndValues(ProdTypeEnum);

    //Convert name-value pairs to ProductType[]
    prodTypeEnumList.forEach(pair => {
      let prodType = { 'id': pair.value.toString(), 'name': pair.name };
      prodTypes.push(prodType);
    });

    return prodTypes;
  }


  //Get books
  public getBooks() {
    return this.http.get("assets/api/products.json", this.httpOptions)
      .map((res: Response) => res.json())
      .map(data=>{
        let filtered = data.filter(x=> x.Type == "Book");
        return filtered;
      })
  }
  //Get toys
  public getToys() {
    return this.http.get("assets/api/products.json", this.httpOptions)
      .map((res: Response) => res.json())
      .map(data=>{
        let filtered = data.filter(x=> x.Type == "Toy");
        return filtered;
      })
  }

}
