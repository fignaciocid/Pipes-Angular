import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitan América';

  nombre2: string = 'FrAnCIscO IgNAciO cId FaRIas';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI : number = Math.PI;

  porcentaje: number = 0.234;

  salario : number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 500,
    direccion: {
      calle:'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise ((resolve)  => {
    setTimeout(() => {
      resolve('Llego la data!');
    },4500);
  });

  fecha :Date = new Date();

  idioma: string = 'es';

  videoUrl: string = 'https://www.youtube.com/embed/YsBe9BFIjBs';

  activar: boolean=true;

}
