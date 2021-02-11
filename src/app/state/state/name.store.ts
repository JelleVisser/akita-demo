import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createName, IName } from './name.model';

export interface NameState extends EntityState<IName> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'name',
  resettable: true,
})
export class NameStore extends EntityStore<NameState> {
  constructor() {
    super();
    this.addInitialValues();
  }

  addInitialValues() {
    const names = Array.apply(null, Array(8)).map((_) => createName());
    this.add(names);
  }
}
