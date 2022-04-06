import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  klient_dane = new FormGroup({
    dane: new FormGroup({
      Imie: new FormControl('', [
        Validators.pattern('[a-zA-Z Ł]*'),
        Validators.required,
      ]),
      nazwisko: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      stacjonarny: new FormControl(''),
      komorkowy: new FormControl(''),
      osoba_p: new FormControl(''),
      firma: new FormControl(''),
    }),
  });
  onSubmit() {}
}
