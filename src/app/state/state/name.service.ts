import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ConfigService, ConfigState } from '../config';
import { createName, IName, randomColor } from './name.model';
import { NameQuery } from './name.query';
import { NameStore } from './name.store';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NameService {
  names$ = combineLatest([
    this._configService.config$,
    this._query.selectAll(),
  ]).pipe(
    map(([config, names]) => {
      const mappedNames = this._mapNamesWithConfig(config, names);
      return this._sortNames(config, mappedNames);
    })
  );

  constructor(
    private _store: NameStore,
    private _query: NameQuery,
    private _configService: ConfigService
  ) {}

  reset() {
    this._store.reset();
    this._store.addInitialValues();
  }

  addName() {
    this._store.add(createName());
  }

  toggleColor(name: IName) {
    this._store.update(name.id, { color: randomColor() });
  }

  toggleCasing(name: IName) {
    let casing = name.casing;

    switch (name.casing) {
      case 'UPPERCASE':
        casing = 'LOWERCASE';
        break;
      case 'LOWERCASE':
        casing = 'NONE';
        break;
      case 'NONE':
        casing = 'UPPERCASE';
        break;
    }

    this._store.update(name.id, { casing });
  }

  private _mapNamesWithConfig(config: ConfigState, names: IName[]): IName[] {
    return names.map((name) => {
      const casedName = this._applyCasingOnName(name);
      const backgroundColor =
        config.color === 'none' ? name.backgroundColor : config.color;

      return {
        ...name,
        backgroundColor,
        name: casedName,
      };
    });
  }

  private _applyCasingOnName(name: IName): string {
    switch (name.casing) {
      case 'UPPERCASE':
        return name.name.toUpperCase();
      case 'LOWERCASE':
        return name.name.toLowerCase();
    }
    return name.name;
  }

  private _sortNames(config: ConfigState, names: IName[]): IName[] {
    if (config.sort === 'none') {
      return names;
    }

    names.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    if (config.sort === 'ascending') {
      names.reverse();
    }
    return names;
  }
}
