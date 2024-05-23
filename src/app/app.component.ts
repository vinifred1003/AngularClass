import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/template/header/header.component';
import { FooterComponent } from '../app/components/template/footer/footer.component';
import { NavComponent } from '../app/components/template/nav/nav.component';
import { PhotoGalleryComponent } from './components/template/photo-gallery/photo-gallery.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PhotoGalleryComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularClass';
}
