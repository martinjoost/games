import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UpdateUserModel } from 'src/app/models/updateuser.model';
import { UserDetailsModel, Country, State } from 'src/app/models/userdetails.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from 'src/app/services/client/client.service';
import { NotAdultValidator } from 'src/app/validators/notadult/notadult-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginInfo: FormGroup;
  personalInfo: FormGroup;
  EMAIL_REGEXP: any = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //autocomple PLACEHOLDER
  countries: Country[] = [];
  filteredCountries: Observable<Country[]>;
  states: State[] = [];
  filteredState: Observable<State[]>;
  cities: string[] = ['Quito', 'London', 'Madrid', 'Santiago de Chile'];
  filteredCity: Observable<string[]>;
  myLangControl = new FormControl();
  lang: string[] = ['English', 'Español', 'Portugués'];
  filteredLang: Observable<string[]>;
  myCurrencyControl = new FormControl();
  currency: string[] = ['USD', 'EUR', 'AUD', 'GBP', 'CAD', 'BRL'];
  filteredCurrency: Observable<string[]>;
  error: boolean = false;
  errorSameChanges: boolean = false;
  profileDetails: UserDetailsModel;
  loading: boolean = true;
  checkfemale: boolean;
  checkmale: boolean;
  checkother: boolean;
  firstep: boolean = false;
  isLinear: boolean = true;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router: Router,
    private _snackBar: MatSnackBar,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.getProfileDetails().subscribe(
      (response: any) => {
        this.loading = true;
        if (response.code === 200) {
          this.error = false;
          this.loading = false;
          this.profileDetails = response.data;
          if (!this.profileDetails.title) {
            this.profileDetails.title = {
              identifier: 3,
              name: '',
              gender: ''
            };
          }
          this.loginInfo.patchValue({
            email: this.profileDetails.email,
            name: this.profileDetails.name,
            last_name: this.profileDetails.last_name,
            country: this.profileDetails.state.country.name,
            phone: this.profileDetails.phone
          });
          this.personalInfo.patchValue({
            title: this.profileDetails.title.identifier,
            birthdate: this.profileDetails.birthdate,
            address1: this.profileDetails.address1,
            address2: this.profileDetails.address2,
            zipcode: this.profileDetails.zipcode,
            language: this.profileDetails.language,
            altEmail: this.profileDetails.altEmail,
            state: this.profileDetails.state.name,
            city: this.profileDetails.city
          });
          if (this.profileDetails.title.identifier === 1) this.checkfemale = true;
          if (this.profileDetails.title.identifier === 2) this.checkmale = true;
          if (this.profileDetails.title.identifier === 3) this.checkother = true;
        } else {
          this.error = true;
          this.loading = false;
        }
      },
      err => {
        this.loading = false;
        this.error = true;
      }
    );
    this.clientService.getCountries().subscribe((countries: any) => (this.countries = countries.data));
    this.clientService.getStates().subscribe((states: any) => (this.states = states.data));
    this.buildLoginInfo();
    this.buildPersonalInfo();
    //country: Select Filter Autocomplete PLACEHOLDER
    this.filterCountry();
    this.filterState();
    this.filterCity();
    this.filterLang();
    this.filterCurrency();
  }

  //LoginInfo PLACEHOLDER
  buildLoginInfo() {
    this.loginInfo = this._formBuilder.group(
      {
        email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]),
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]+')]),
        //password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        // password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
        country: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+')])
      },
      {
        //validator: [PasswordValidator.MatchPassword]
      }
    );
  }

  //personalInfo
  buildPersonalInfo() {
    this.personalInfo = this._formBuilder.group(
      {
        title: new FormControl('', [Validators.required]),
        birthdate: new FormControl('', [Validators.required]),
        address1: new FormControl('', [Validators.required]),
        address2: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', []),
        language: new FormControl('', [Validators.required]),
        currency: new FormControl('', []),
        whoreferall: new FormControl('', []),
        howreferall: new FormControl('', []),
        altEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]),
        state: new FormControl('', []),
        _method: new FormControl('PUT', [])
      },
      {
        validator: [NotAdultValidator.NotAdult]
      }
    );
  }

  //UPDATE PERSONAL INFO
  saveChanges() {
    this.loading = true;
    this.personalInfo.value.birthdate = this.datePipe.transform(this.personalInfo.value.birthdate, 'yyyy-MM-dd');
    this.personalInfo.value.title = Number(this.personalInfo.value.title);
    const dataUser: UpdateUserModel = {
      ...this.personalInfo.value,
      ...this.loginInfo.value,
      country: this.countries.find(c => c.name == this.loginInfo.get('country').value).identifier
    };
    this.authService.updateUser(dataUser).subscribe(
      (response: any) => {
        if (response.code === 200) {
          this.loading = false;
          this._snackBar.open('Your changes have been saved Successfully!', 'OK', {
            duration: 2000
          });
          this.router.navigate(['/home']);
        }
        if (response.code != 200) {
          this._snackBar.open('Oops, an error has occurred, try again!', 'OK', {
            duration: 2000
          });
          this.loading = false;
        }
      },
      err => {
        this.error = true;
        this.loading = false;
        if (err.error.error.message[0] === 'Must specify different value for update.') {
          this.error = false;
          this.errorSameChanges = true;
          this.loading = false;
          return;
        }
      }
    );
  }
  //ACá los peores placeholders de la historia
  //country: Select Filter Autocomplete PLACEHOLDER - Example Material: https://material.angular.io/components/autocomplete/examples
  filterCountry() {
    this.filteredCountries = this.loginInfo.get('country').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: Country | string): Country[] {
    if (value && typeof value == 'object') {
      const filterValue = value.name.toLowerCase();
      return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
    }
    if (value && typeof value == 'string') {
      const filterValue = value.toLowerCase();
      return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
    }
    if (value == '') {
      return this.countries;
    }
  }

  //#END country: Select Filter Autocomplete PLACEHOLDER
  //state: Select Filter Autocomplete PLACEHOLDER - Example Material: https://material.angular.io/components/autocomplete/examples
  filterState() {
    this.filteredState = this.personalInfo.get('state').valueChanges.pipe(
      startWith(''),
      map(value => this._filterState(value))
    );
  }
  private _filterState(value: State | string): State[] {
    if (value && typeof value == 'object') {
      const filterValue = value.name.toLowerCase();
      return this.states.filter(country => country.name.toLowerCase().includes(filterValue));
    }
    if (value && typeof value == 'string') {
      const filterValue = value.toLowerCase();
      return this.states.filter(country => country.name.toLowerCase().includes(filterValue));
    }
    if (value == '') {
      return this.states;
    }
  }

  getOptionText(option) {
    return option.name;
  }

  //#END state: Select Filter Autocomplete PLACEHOLDER
  //state: Select Filter Autocomplete PLACEHOLDER - Example Material: https://material.angular.io/components/autocomplete/examples
  filterCity() {
    this.filteredCity = this.personalInfo.get('city').valueChanges.pipe(
      startWith(''),
      map(value => this._filterCity(value))
    );
  }
  private _filterCity(value: string): string[] {
    const filterValCity = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filterValCity));
  }
  //#END state: Select Filter Autocomplete PLACEHOLDER

  //language: Select Filter Autocomplete PLACEHOLDER - Example Material: https://material.angular.io/components/autocomplete/examples
  filterLang() {
    this.filteredLang = this.personalInfo.get('language').valueChanges.pipe(
      startWith(''),
      map(value => this._filterLang(value))
    );
  }
  private _filterLang(value: string): string[] {
    const filterValLang = value.toLowerCase();
    return this.lang.filter(lang => lang.toLowerCase().includes(filterValLang));
  }
  //#END state: Select Filter Autocomplete PLACEHOLDER
  //currency: Select Filter Autocomplete PLACEHOLDER - Example Material: https://material.angular.io/components/autocomplete/examples
  filterCurrency() {
    this.filteredCurrency = this.myCurrencyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCurrency(value))
    );
  }
  private _filterCurrency(value: string): string[] {
    const filterValCurrency = value.toLowerCase();
    return this.currency.filter(currency => currency.toLowerCase().includes(filterValCurrency));
  }
  //#END currency: Select Filter Autocomplete PLACEHOLDER

  get loginInfoCtrls() {
    return this.loginInfo.controls;
  }
}
