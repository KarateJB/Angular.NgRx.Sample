import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
    return new Promise<Product[]>(
      resolve => {
        let books = PRODUCTS.filter(x => x.Type == "Book");
      });
  }
  //Get toys
  public getToys() {
    return new Promise<Product[]>(
      resolve => {
        let toys = PRODUCTS.filter(x => x.Type == "Toy");
        resolve(toys);
      });
  }

}


const PRODUCTS: Product[] =
  [{ "Id": "1", "TypeId": "1", "Type": "Book", "Title": "Book 1", "Price": 400 },
  { "Id": "2", "TypeId": "1", "Type": "Book", "Title": "Book 2", "Price": 250 },
  { "Id": "3", "TypeId": "1", "Type": "Book", "Title": "Book 3", "Price": 650 },
  { "Id": "4", "TypeId": "2", "Type": "Toy", "Title": "Doll", "Price": 1000 },
  { "Id": "5", "TypeId": "2", "Type": "Toy", "Title": "Toy Train", "Price": 2200 },
  { "Id": "6", "TypeId": "2", "Type": "Toy", "Title": "LEGO", "Price": 3000 }];
