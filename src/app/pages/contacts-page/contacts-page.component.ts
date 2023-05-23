import { Component } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent {
  
  listaContactos: IContacto[] = [
    {
      id:0,
      nombre: 'Carlos',
      apellidos: 'Pulido Mejia',
      email: 'cjlpulido@hotmail.com'
    },
    {
      id:1,
      nombre: 'Andres',
      apellidos: 'Garcia',
      email: 'andres@hotmail.com'
    },
    {
      id:2,
      nombre: 'Ana',
      apellidos: 'Hernandez',
      email: 'anah@hotmail.com'
    }
  ]
  
  constructor () {}

}
