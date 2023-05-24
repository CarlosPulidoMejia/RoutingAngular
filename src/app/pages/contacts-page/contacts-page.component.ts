import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  
  listaContactos: IContacto[] = [
    {
      id:0,
      nombre: 'Carlos',
      apellidos: 'Pulido Mejia',
      email: 'cjlpulido@hotmail.com',
      sexo: 'hombre'
    },
    {
      id:1,
      nombre: 'Andres',
      apellidos: 'Garcia',
      email: 'andres@hotmail.com',
      sexo: 'hombre'
    },
    {
      id:2,
      nombre: 'Ana',
      apellidos: 'Hernandez',
      email: 'anah@hotmail.com',
      sexo: 'mujer'
    }
  ]

  constructor (private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Obtener los Query Params
    this.route.queryParams.subscribe((params: any)=>{
      console.log('QueryParam: ',params.sexo);
    })
  }

  //Ejemplo de paso de información a través del estado
  volverAHome(contacto: IContacto){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    this.router.navigate(['/home'],navigationExtras);
  }
}
