import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed = true;
  @Output() navFeatureSelected = new EventEmitter<string>();

  onSelect(navFeature: string) {
    this.navFeatureSelected.emit(navFeature);
  }
}
