import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../interfaces/accordion.interfaces';

@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {

  @Input() items: AccordionItem[] = [];

  openItem: number | null = null;

  toggleAccordion(index: number): void {
    this.openItem = this.openItem === index ? null : index;
  }
}