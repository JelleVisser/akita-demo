import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ConfigStore, ConfigState } from './config.store';

@Injectable({ providedIn: 'root' })
export class ConfigQuery extends Query<ConfigState> {

  constructor(protected store: ConfigStore) {
    super(store);
  }

}
