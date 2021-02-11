import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NameStore, NameState } from './name.store';

@Injectable({ providedIn: 'root' })
export class NameQuery extends QueryEntity<NameState> {

  constructor(protected store: NameStore) {
    super(store);
  }

}
