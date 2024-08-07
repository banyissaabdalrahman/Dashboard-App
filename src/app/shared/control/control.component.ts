import { Component, ContentChild, contentChild, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: "control", // HostBindung
    '(click)': 'onClick()' // HostListener
  }
})

export class ControlComponent {
  
  // @ HostBinding('class') className = "control";
  // @ HostListener('click') onClick = () => console.log('Clicked!')

  @Input({ required: true }) label!: string;
  
  // private el = inject(ElementRef); --> Accessing Host Elements Programmatically
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')
    
  onClick (){
    console.log('Clicked!'); // HostListener target method
    // console.log(this.el);
    console.log(this.control());
  } 
}
