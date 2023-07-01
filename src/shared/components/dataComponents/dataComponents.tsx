import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

export const menuItens = [
  { name: 'Home', path: '/', icon: <FaIcons.FaHome /> },
  {
    name: 'Guides',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    submenu: [
      {
        title: 'Chaos Machine',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        submenu: [
          {
            title: 'Seed Sphere',
          },
        ],
      },
      {
        title: 'Adniel',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        submenu: [
          {
            title: 'Seed Sphere',
          },
        ],
      },
      {
        title: 'Seed Master',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        submenu: [
          {
            title: 'Seed Sphere',
          },
        ],
      },
      {
        title: 'Trainer',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        submenu: [
          {
            title: 'Seed Sphere',
          },
        ],
      },
      {
        title: 'Harmony',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        submenu: [
          {
            title: 'Seed Sphere',
          },
        ],
      },
    ],
  },
  {
    name: 'Characters',
    icon: <FaIcons.FaUserAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    submenu: [
      { path: '/char/dark-wizard', title: 'Dark Wizard' },
      { path: '/char/dark-knight', title: 'Dark Knight' },
      { path: '/char/fairy-elf', title: 'Fairy Elf' },
      { path: '/char/magic-gladiator', title: 'Magic Gladiator' },
      { path: '/char/dark-lord', title: 'Dark Lord' },
      { path: '/char/summoner', title: 'Summoner' },
      { path: '/char/rage-fighte', title: 'Rage Fighter' },
      { path: '/char/grow-lancer', title: 'Grow Lancer' },
      { path: '/char/rune-wizard', title: 'Rune Wizard' },
      { path: '/char/slayer', title: 'Slayer' },
      { path: '/char/gun-crusher', title: 'Gun Crusher' },
      { path: '/char/kundun-mephis', title: 'Kundun Mephis' },
      { path: '/char/lemuria', title: 'Lemuria' },
      { path: '/char/illusion-knight', title: 'Illusion Knight' },
    ],
  },
];

export const logoData = {
  logo: 'https://res.cloudinary.com/dizbyfixi/image/upload/v1687621032/MuHelper/page/logo-mini_chzuyz.webp',
  link: '/',
  title: 'logo',
};

export const npcList = [
  { id: 1, name: 'chaos-machine' },
  { id: 2, name: 'adniel' },
  { id: 3, name: 'seed-master' },
  { id: 4, name: 'trainer' },
  { id: 5, name: 'harmony' },
];
