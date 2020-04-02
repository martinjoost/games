export interface UserDetailsModel {
  identifier: number;
  birthdate: string;
  title: Title;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  mobile: string;
  address1: string;
  address2: string;
  city: string;
  zipcode: string;
  usr_ssn: string;
  ssn_type: string;
  language: string;
  altEmail: string;
  quick_deposit: string;
  state: State;
  code: number;
}

export interface State {
  identifier: number;
  name: string;
  iso: string;
  country?: Country;
}
export interface Title {
  identifier: number;
  name: string;
  gender: string;
}
export interface Country {
  identifier: number;
  name: string;
  iso: string;
}
