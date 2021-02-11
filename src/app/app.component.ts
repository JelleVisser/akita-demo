import { Component } from '@angular/core';
import { ConfigService } from './state/config';
import { IName, NameService } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  names$ = this._nameService.names$;
  config$ = this._configService.config$;

  constructor(
    private _nameService: NameService,
    private _configService: ConfigService
  ) {}

  toggleColor(name: IName) {
    this._nameService.toggleColor(name);
  }

  toggleCasing(name: IName) {
    this._nameService.toggleCasing(name);
  }

  updateConfigColor(color: string) {
    this._configService.updateColor(color);
  }

  updateSort(sort: string) {
    this._configService.updateSort(sort);
  }

  addName() {
    this._nameService.addName();
  }

  reset() {
    this._nameService.reset();
  }

  toggleSidebar() {
    this._configService.toggleSidebar();
  }

  trackById(_: number, name: IName) {
    return name.id;
  }
}
