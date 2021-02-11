import { guid, ID } from '@datorama/akita';

export interface IName {
  id: ID;
  name: string;
  casing: 'UPPERCASE' | 'LOWERCASE' | 'NONE';
  image: string;
  color?: string;
  backgroundColor?: string;
}

export function createName() {
  return {
    id: guid(),
    name: randomName(),
    casing: 'NONE',
    image: `http://placeimg.com/300/200/animals?random=${Math.floor(
      Math.random() * 1000
    )}`,
  } as IName;
}

function randomName(): string {
  return names[Math.floor(Math.random() * names.length)];
}

export function randomColor(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

const names = [
  'Jelle',
  'Maurice',
  'Frano',
  'Dmitry',
  'Barry',
  'Eric',
  'Hee Chan',
  'Alex',
  'Alexander',
  'Henri',
  'Frank',
  'Taigo',
  'Frano',
  'Jordi',
  'Dominika',
  'Pallieter',
  'Serhii',
  'Matt',
  'Kee Yeong',
  'Gerben',
];

const colors = [
  'FireBrick',
  'DarkGoldenRod',
  'DeepSkyBlue',
  'DarkOrchid',
  'Gold',
  'GreenYellow',
  'LightGoldenRodYellow',
  'MediumSpringGreen',
  'PeachPuff',
  'YellowGreen',
];
