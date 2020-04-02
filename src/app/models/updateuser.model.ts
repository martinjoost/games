
export class UpdateUserModel {
    title:number;
    name: string;
    last_name: string;
    email: string
    country: number;
    zipcode: string;
    birthdate: string;
    state: string;
    city: string;
    phone: string;
    address1: string;
    address2: string;
    language: string;
    currency: string;
    whoreferall: string;
    howreferall: string;
    altEmail: string;
    _method:string;

    constructor(){
      this._method = 'PUT'
    }

  }