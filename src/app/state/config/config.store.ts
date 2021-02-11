import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ConfigState {
  color: string;
  sort: string;
  sidebarIsOpen: boolean;
}

export function createInitialState(): ConfigState {
  return {
    color: 'none',
    sort: 'none',
    sidebarIsOpen: true,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'config' })
export class ConfigStore extends Store<ConfigState> {
  constructor() {
    super(createInitialState());
  }
}
