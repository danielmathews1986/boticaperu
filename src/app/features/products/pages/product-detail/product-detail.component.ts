import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperComponent } from '../../../../shared/swiper/swiper.component';
import { AccordionItem } from '../../../../interfaces/accordion.interfaces';
import { AccordionComponent } from '../../../../shared/accordion/accordion.component';
import { CardComponent } from '../../components/card.component';
import { SeoService } from '../../../../services/seo.service';
import { AnalyticsService } from '../../../../services/analytics.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports:[CommonModule, FormsModule, SwiperComponent, AccordionComponent, CardComponent, SwiperComponent],
  templateUrl:
    './product-detail.component.html',
  styleUrl:'./product-detail.component.scss',
})
export class ProductDetailComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private seo = inject(SeoService);
  private analytics = inject(AnalyticsService);
  
  product: any;

  items: string[] = [
    '¿Qué es PHARAMOL ANTIGRIPAL 500mg+5mg+2mg Tableta Recubierta y para qué se utiliza?',
    'Es un medicamento que contiene: paracetamol que funciona para evitar que los mensajes de dolor lleguen al cerebro, también actúa en el cerebro para reducir la fiebre. La fenilefrina es un descongestionante nasal y la clorfenamina pertenece a un grupo de medicamentos llamados "antihistamínicos". Los antihistamínicos ayudan a reducir los síntomas alérgicos al prevenir los efectos de una sustancia llamada histamina. La histamina es producida por el cuerpo en respuesta a sustancias extrañas a las que el cuerpo es alérgico.',
    'Está indicado para el alivio temporal de los síntomas del resfriado común/ gripe: congestión nasal, dolor de cabeza, secreción nasal, dolor de garganta, dolores y molestias menores, estornudos y fiebre para adultos y adolescentes mayores de 12 años.',
    'Debe consultar a un médico si empeora o si no mejora o si la fiebre persiste durante más de 3 días o el dolor durante más de 5 días.',
    'Si el dolor de garganta es grave, persiste durante más de 2 días, ocurre con o es seguido de fiebre, dolor de cabeza, erupción cutánea, náuseas o vómitos, consulte a un médico de inmediato.'
  ];

  products = [
    { "id": 101, "name": "La Roche-Posay Effaclar Gel Limpiador 200ml", "price": 79.90 },
    { "id": 302, "name": "Omega 3 1000mg x 100 Cápsulas", "price": 45.90 },
    { "id": 202, "name": "Ibuprofeno 400mg Caja x 20 Tabletas", "price": 8.90 },
    { "id": 402, "name": "Pediasure Vainilla 400g", "price": 69.90 },
    { "id": 404, "name": "Nestum Trigo y Miel 270g", "price": 12.90 },
    { "id": 405, "name": "Johnson's Baby Shampoo 400ml", "price": 19.90 },
    { "id": 104, "name": "ISDIN Acniben Gel Limpiador 150ml", "price": 69.90 },
    { "id": 105, "name": "Cetaphil Loción Hidratante 473ml", "price": 89.90 },
    { "id": 303, "name": "Magnesio x 60 Cápsulas", "price": 35.90 },
  ];

  accordionItems: AccordionItem[] = [
    {
      title: 'Descripción larga',
      content: 'Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)'
    },
    {
      title: 'Composición',
      content: 'text.....'
    },
    {
      title: 'Contraindicaciones',
      content: 'text.....'
    }
  ];
  
  expanded = false;
  selectedPresentation = '';

  images = [
    {
      id: 1,
      thumb: '/products/icon-big1.svg',
      full: '/products/big1.svg'
    },
    {
      id: 2,
      thumb: '/products/icon-big2.svg',
      full: '/products/big2.svg'
    },
    {
      id: 3,
      thumb: '/products/icon-big3.svg',
      full: '/products/big3.svg'
    }
  ];

  selectedImage = this.images[0];

 
  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getCategories().subscribe(response => {
  
      for (const category of response.categories) {
  
        const product = category.products.find(p => p.id === id);
  
        if (product) {
  
          this.product = {
            ...product,
            categoryName: category.name
          };

          this.analytics.viewItem(
            this.product
          );
  
          // 👉 AQUÍ YA EXISTE EL PRODUCTO
          this.seo.setSeo({
            title: `${this.product.name} | Botica Perú`,
          });
  
          break;
        }
      }
  
    });
  }

  selectImage(image: any): void {
    this.selectedImage = image;
  }
  
  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

}