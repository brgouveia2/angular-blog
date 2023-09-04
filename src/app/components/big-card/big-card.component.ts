import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent {
  
  @Input()
  photoCover: string="";
  @Input()
  cardTitle: string='NOVA VERSÃO DO ANGULAR JÁ SAIU!';
  @Input()
  cardDescription: string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus, diam sit amet ultricies varius, dui ipsum fringilla massa, vel facilisis ipsum sapien sed arcu. Donec porttitor nec est eu cursus.";
}
