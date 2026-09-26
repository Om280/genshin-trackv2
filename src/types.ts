export type ElementType = 'Hydro' | 'Pyro' | 'Cryo' | 'Electro' | 'Anemo' | 'Geo' | 'Dendro';
export type WeaponType = 'Sword' | 'Claymore' | 'Polearm' | 'Catalyst' | 'Bow';

export type Character = {
  id: string;
  name: string;
  title: string;
  element: ElementType;
  weapon: WeaponType;
  rarity: number;
  level: number;
  constellation: number;
  region: string;
  icon: string;
  splash: string;
  ascensionStat: string;
  ascensionStatValue: string;
  buildLabel: string;
  guideSource: string;
};

export type Team = {
  name: string;
  members: string[];
  archetype: string;
  reaction: string;
  roles: string[];
  mainDpsId: string;
};

export type Banner = {
  name: string;
  type: 'character' | 'weapon';
  phase: string;
  startDate: string;
  endDate: string;
  characters: string[];
  weapons: string[];
};

export type Goal = {
  title: string;
  characterId: string;
  progress: number;
  current: number;
  target: number;
  accent: string;
};
