import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedNavFeature = 'recipe';

  onNavigate(navFeature: string) {
    this.loadedNavFeature = navFeature;
  }
}
