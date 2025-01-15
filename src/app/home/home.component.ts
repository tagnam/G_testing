import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


slider:any[]=[

{ image:'assets/images/slide01.jpg' ,text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.' },
{ image:'assets/images/slide01.jpg' ,text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.' },
{ image:'assets/images/slide01.jpg' ,text:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.' }

]

diseases:any[]=[
  { image:'assets/images/antibiotics.png', text:'Lorem, ipsum'},
  { image:'assets/images/blood-pressure-gauge.png', text:'Lorem, ipsum'},
  { image:'assets/images/cholesterol.png', text:'Lorem, ipsum'},
  { image:'assets/images/vitamins.png', text:'Lorem, ipsum'},
  { image:'assets/images/supplements.png', text:'Lorem, ipsum'},
  { image:'assets/images/sugar-blood-level.png', text:'Lorem, ipsum'},
  { image:'assets/images/fever.png', text:'Lorem, ipsum'},
  { image:'assets/images/Epilepsy.png', text:'Lorem, ipsum'},
  { image:'assets/images/coronavirus.png', text:'Lorem, ipsum'},
  { image:'assets/images/rash.png', text:'Lorem, ipsum'},
  ]

whyUs:any[]=[
  {icon:'bi bi-rocket-takeoff',heading:'Lorem ipsum dolor',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure, provident quo expedita veniam alias,'},
  {icon:'bi bi-rocket-takeoff',heading:'Lorem ipsum dolor',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure, provident quo expedita veniam alias,'},
  {icon:'bi bi-rocket-takeoff',heading:'Lorem ipsum dolor',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure, provident quo expedita veniam alias,'},
  {icon:'bi bi-rocket-takeoff',heading:'Lorem ipsum dolor',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure, provident quo expedita veniam alias,'},

]



}
