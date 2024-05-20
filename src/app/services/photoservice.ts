import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private images: any[] = [
    {
      itemImageSrc: 'https://br.freepik.com/fotos-gratis/um-por-do-sol-sobre-uma-praia-com-um-por-do-sol-dourado-ao-fundo_42292952.htm#query=paisagem&position=0&from_view=keyword&track=sph&uuid=171f38aa-7a0e-417b-b97c-95af8afd46ca',
      thumbnailImageSrc: '',
      alt: 'Description for Image 1',
      title: 'Title 1'
    }
  ];

  getImages() {
    return Promise.resolve(this.images.map(image => ({ ...image })));  // Retorna uma cópia de cada objeto
  }
}
