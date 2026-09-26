import type { Character, Team, Banner, Goal } from './types';

export const characters: Character[] = [
  {
    id: 'albedo',
    name: 'Albedo',
    title: 'Kreideprinz',
    element: 'Geo',
    weapon: 'Sword',
    rarity: 5,
    level: 90,
    constellation: 0,
    region: 'Mondstadt',
    icon: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'Geo DMG Bonus',
    ascensionStatValue: '+28.8%',
    buildLabel: 'Off-field support / driver',
    guideSource: 'KQM Theorycrafting Library'
  },
  {
    id: 'furina',
    name: 'Furina',
    title: 'The Oratrice',
    element: 'Hydro',
    weapon: 'Sword',
    rarity: 5,
    level: 90,
    constellation: 1,
    region: 'Fontaine',
    icon: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'CRIT Rate',
    ascensionStatValue: '+24.0%',
    buildLabel: 'Burst support / team buffer',
    guideSource: 'KeqingMains'
  },
  {
    id: 'hu-tao',
    name: 'Hu Tao',
    title: 'Fragrance in Thaw',
    element: 'Pyro',
    weapon: 'Polearm',
    rarity: 5,
    level: 90,
    constellation: 1,
    region: 'Liyue',
    icon: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'CRIT DMG',
    ascensionStatValue: '+28.8%',
    buildLabel: 'Main DPS',
    guideSource: 'KQM'
  },
  {
    id: 'kazuha',
    name: 'Kaedehara Kazuha',
    title: 'Scarlet Leaves',
    element: 'Anemo',
    weapon: 'Sword',
    rarity: 5,
    level: 90,
    constellation: 2,
    region: 'Inazuma',
    icon: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'Energy Recharge',
    ascensionStatValue: '+24.0%',
    buildLabel: 'Anemo support / utility',
    guideSource: 'KQM'
  },
  {
    id: 'keqing',
    name: 'Keqing',
    title: 'The Stellar Ruler',
    element: 'Electro',
    weapon: 'Sword',
    rarity: 5,
    level: 90,
    constellation: 6,
    region: 'Liyue',
    icon: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'ATK%',
    ascensionStatValue: '+24.0%',
    buildLabel: 'Main DPS / hypercarry',
    guideSource: 'KQM'
  },
  {
    id: 'nahida',
    name: 'Nahida',
    title: 'The Dendro Archon',
    element: 'Dendro',
    weapon: 'Catalyst',
    rarity: 5,
    level: 90,
    constellation: 2,
    region: 'Sumeru',
    icon: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'Elemental Mastery',
    ascensionStatValue: '+96',
    buildLabel: 'Support / off-field',
    guideSource: 'KQM'
  },
  {
    id: 'navia',
    name: 'Navia',
    title: 'The Ceremonial Captain',
    element: 'Geo',
    weapon: 'Claymore',
    rarity: 5,
    level: 90,
    constellation: 0,
    region: 'Fontaine',
    icon: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'CRIT Rate',
    ascensionStatValue: '+24.0%',
    buildLabel: 'Main DPS / Geo carry',
    guideSource: 'KQM'
  },
  {
    id: 'yelan',
    name: 'Yelan',
    title: 'Lingering Rain',
    element: 'Hydro',
    weapon: 'Bow',
    rarity: 5,
    level: 90,
    constellation: 1,
    region: 'Liyue',
    icon: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'HP%',
    ascensionStatValue: '+24.0%',
    buildLabel: 'Sub DPS / support',
    guideSource: 'KQM'
  },
  {
    id: 'yoimiya',
    name: 'Yoimiya',
    title: 'Pyro Arsonist',
    element: 'Pyro',
    weapon: 'Bow',
    rarity: 5,
    level: 90,
    constellation: 2,
    region: 'Inazuma',
    icon: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'CRIT DMG',
    ascensionStatValue: '+28.8%',
    buildLabel: 'Main DPS / Pyro carry',
    guideSource: 'KeqingMains'
  },
  {
    id: 'zhongli',
    name: 'Zhongli',
    title: 'Vago Mundo',
    element: 'Geo',
    weapon: 'Polearm',
    rarity: 5,
    level: 90,
    constellation: 6,
    region: 'Liyue',
    icon: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    splash: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    ascensionStat: 'Geo DMG Bonus',
    ascensionStatValue: '+28.8%',
    buildLabel: 'Shielder / sustain',
    guideSource: 'KQM'
  }
];

export const teams: Team[] = [
  {
    name: 'Freezing Vapor',
    members: ['hu-tao', 'furina', 'kazuha', 'zhongli'],
    archetype: 'Vaporize',
    reaction: 'Vaporize',
    roles: ['Main DPS', 'Support', 'Buffer', 'Sustain'],
    mainDpsId: 'hu-tao'
  },
  {
    name: 'Hyperbloom Core',
    members: ['nahida', 'yelan', 'zhongli', 'keqing'],
    archetype: 'Hyperbloom',
    reaction: 'Hyperbloom',
    roles: ['Driver', 'Sub DPS', 'Sustain', 'Trigger'],
    mainDpsId: 'nahida'
  },
  {
    name: 'Electro Aggravate',
    members: ['keqing', 'nahida', 'furina', 'kazuha'],
    archetype: 'Aggravate',
    reaction: 'Aggravate',
    roles: ['Main DPS', 'Driver', 'Support', 'Utility'],
    mainDpsId: 'keqing'
  }
];

export const banners: Banner[] = [
  {
    name: 'Character Event - Furina',
    type: 'character',
    phase: 'Version 4.2',
    startDate: '2025-02-18',
    endDate: '2025-03-11',
    characters: ['furina', 'navia'],
    weapons: ['Song of Broken Pines']
  },
  {
    name: 'Weapon Event - Primordial Jade Cutter',
    type: 'weapon',
    phase: 'Version 4.2',
    startDate: '2025-02-18',
    endDate: '2025-03-11',
    characters: ['nahida'],
    weapons: ['Primordial Jade Cutter']
  }
];

export const goals: Goal[] = [
  { title: 'Build Furina', progress: 78, current: 78, target: 100, accent: 'Hydro' },
  { title: 'Ascend Keqing', progress: 62, current: 62, target: 100, accent: 'Electro' },
  { title: 'Farm artifacts', progress: 44, current: 44, target: 100, accent: 'Anemo' }
];

export const guideHtml = `
  <h2>Overview</h2>
  <p>Furina is best framed as a high-impact support or buffer whose value is tied to her burst timing, team rotation, and sustained Hydro application.</p>
  <ul>
    <li>Use a team that can exploit <strong>Vaporize</strong> or <strong>Hydro</strong> off-field damage.</li>
    <li>Keep Energy Recharge in a healthy range without over-investing.</li>
    <li>Stack enough CRIT to maintain burst windows.</li>
  </ul>
  <h3>Recommended build</h3>
  <p>Focus on a weapon that supports high uptime and team consistency, then pair it with a split of CRIT, HP, and Energy Recharge.</p>
`;
