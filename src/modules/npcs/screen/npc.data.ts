const npcList = [
  { id: 1, name: 'chaos-machine' },
  { id: 2, name: 'adniel' },
  { id: 3, name: 'seed-master' },
  { id: 4, name: 'trainer' },
  { id: 5, name: 'harmony' },
];

const npcLink = npcList.map((npc) => npc.name);

export const NpcsDataContent = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dizbyfixi/image/upload/v1687723279/MuHelper/page/cm_kxgsky.png',
    title: 'Chaos Machine',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: npcLink[0],
    subImages: [
      {
        id: 1,
        subImage:
          'https://res.cloudinary.com/dizbyfixi/image/upload/v1687727690/MuHelper/page/itens/goldenFenrir_zwnboh.png',
        subAlt: 'Golden Fenrir',
      },
      {
        id: 2,
        subImage:
          'https://res.cloudinary.com/dizbyfixi/image/upload/v1687727690/MuHelper/page/itens/w4.png',
        subAlt: 'Wing of Illusion',
      },
      {
        id: 3,
        subImage:
          'https://res.cloudinary.com/dizbyfixi/image/upload/v1687727690/MuHelper/page/itens/chaosItem_fteedl.png',
        subAlt: 'Chos Item',
      },
    ],
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dizbyfixi/image/upload/v1687722482/MuHelper/page/adniel_bzalgn.webp',
    title: 'Adniel',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: npcLink[1],
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dizbyfixi/image/upload/v1687722482/MuHelper/page/seed_os26m6.png',
    title: 'Seed Master',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: npcLink[2],
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dizbyfixi/image/upload/v1687723279/MuHelper/page/trainer_qsln3b.png',
    title: 'Trainer',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: npcLink[3],
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dizbyfixi/image/upload/v1687723279/MuHelper/page/elpis_jiibil.png',
    title: 'Harmony',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: npcLink[4],
  },
];
