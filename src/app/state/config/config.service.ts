import { Injectable } from '@angular/core';
import { ConfigQuery } from './config.query';
import { ConfigStore } from './config.store';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  config$ = this._query.select();

  constructor(private _store: ConfigStore, private _query: ConfigQuery) {}

  updateColor(color: string) {
    this._store.update({ color });
  }

  updateSort(sort: string) {
    this._store.update({ sort });
  }

  toggleSidebar() {
    const sidebarIsOpen = !this._query.getValue().sidebarIsOpen;
    this._store.update({ sidebarIsOpen });
  }
}
