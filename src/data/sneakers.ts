import type { SneakerModel } from '../types/sneaker';

export const SNEAKERS_DATA: SneakerModel[] = [
  {
    id: 1,
    brand: 'NIKE',
    silhouette: 'AF1',
    name: "Air Force 1 '07",
    basePrice: 529900,
    colorways: [
      {
        id: 'af1-triple-white',
        name: 'Triple White',
        reference: 'CW2288-111',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211b-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+07.png',
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
      },
      {
        id: 'af1-black-white',
        name: 'Black/White',
        reference: 'CW2288-001',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ab7b2bc-5f3e-4d05-8cf0-3f5d74a8555a/air-force-1-07-shoe-5QFqFQ.png',
        sizes: [6, 7, 8, 9, 10, 11, 12],
      },
      {
        id: 'af1-sail-olive',
        name: 'Sail/Olive',
        reference: 'CW2288-135',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5dca880b-64ed-4dad-ae87-61f38e04f981/air-force-1-07-shoe-rB5j8v.png',
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11],
      },
    ],
  },
  {
    id: 2,
    brand: 'NIKE',
    silhouette: 'AIR MAX',
    name: 'Air Max 90',
    basePrice: 599900,
    colorways: [
      {
        id: 'air-max-infrared',
        name: 'Infrared',
        reference: 'CN8490-002',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/37eba7d9-7620-4b04-90bc-8a3151e4e0a2/AIR+MAX+90.png',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'air-max-triple-black',
        name: 'Triple Black',
        reference: 'CN8490-001',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/653e7b75-89c8-4d0a-b1e6-0e7c6b5a4d3f/AIR+MAX+97.png',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'air-max-white-grey',
        name: 'White/Particle Grey',
        reference: 'CN8490-100',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65b94f1a-17b5-49db-a895-71ba0d9c1ebd/air-max-90-shoe-5SxM1N.png',
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
      },
    ],
  },
  {
    id: 3,
    brand: 'NIKE',
    silhouette: 'DUNK',
    name: 'Dunk Low Retro',
    basePrice: 489900,
    colorways: [
      {
        id: 'dunk-panda',
        name: 'Panda',
        reference: 'DD1391-100',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6da41fa-2be4-4b06-bbf2-2d6060a7e476/NIKE+DUNK+LOW+RETRO.png',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'dunk-university-blue',
        name: 'University Blue',
        reference: 'DD1391-400',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6f8df07-7dad-4d2e-bf6c-c3e9c5c4ffc2/dunk-low-retro-shoe-1G4c1I.png',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'dunk-grey-fog',
        name: 'Grey Fog',
        reference: 'DD1391-200',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8701d7dc-8d63-4410-a5ac-a3d90da542bb/air-jordan-1-low-shoe-2C5x2H.png',
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12],
      },
    ],
  },
  {
    id: 4,
    brand: 'ADIDAS',
    silhouette: 'SUPERSTAR',
    name: 'Superstar',
    basePrice: 419900,
    colorways: [
      {
        id: 'superstar-core-black',
        name: 'Core Black',
        reference: 'B37457',
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/65fd44387c1b48c39f2352c02ef1d2f0_9366/Superstar_Shoes_Black_B37457_01_standard.jpg',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'superstar-cloud-white',
        name: 'Cloud White',
        reference: 'B37458',
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a5f3b0e0e3a4b8f9c0d1e2f3a4b5c6d_9366/Campus_00s_Shoes_Black_HQ8708_01_standard.jpg',
        sizes: [6, 7, 8, 9, 10, 11, 12],
      },
      {
        id: 'superstar-green',
        name: 'Collegiate Green',
        reference: 'B37459',
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78a1477aa56babe0d6ceeb04_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg',
        sizes: [7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: 5,
    brand: 'ADIDAS',
    silhouette: 'BAD BUNNY',
    name: 'Bad Bunny Forum',
    basePrice: 899900,
    colorways: [
      {
        id: 'bad-bunny-blue',
        name: 'Blue/White',
        reference: 'HQ8520',
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab0c233d678b4f91ba4ca535d5f5ae5c_9366/Forum_Low_Bad_Bunny_White_HQ8520_01_standard.jpg',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'bad-bunny-brown',
        name: 'Brown/Beige',
        reference: 'HQ8521',
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89cc1c6ad4cf4307b4d96f8c9d8461c9_9366/Forum_Low_Bad_Bunny_Brown_HQ8521_01_standard.jpg',
        sizes: [6, 7, 8, 8.5, 9, 10, 11],
      },
      {
        id: 'bad-bunny-black',
        name: 'Black/Gold',
        reference: 'HQ8522',
        image:
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d584e5e2d084a30ba3ebd485e9af6c4_9366/Forum_Low_Bad_Bunny_Black_HQ8522_01_standard.jpg',
        sizes: [7, 7.5, 8, 9, 9.5, 10, 11],
      },
    ],
  },
  {
    id: 6,
    brand: 'JORDAN',
    silhouette: '1',
    name: 'Air Jordan 1 Retro High',
    basePrice: 849900,
    colorways: [
      {
        id: 'jordan1-varsity-red',
        name: 'Varsity Red',
        reference: 'DZ5485-612',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+JORDAN+1+RETRO+HIGH+OG.png',
        sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
      },
      {
        id: 'jordan1-bred',
        name: 'Bred Toe',
        reference: '555088-063',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fbbfd408-0f4b-41f8-bec5-d7d2933c5b4d/air-jordan-1-low-shoe-1wZCBw.png',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'jordan1-sail',
        name: 'Sail/Neutral Grey',
        reference: 'DV1308-120',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/051d3509-6970-44f1-ae4f-7f6f4aaa1c1f/air-jordan-1-low-shoe-7Vk6M0.png',
        sizes: [7, 8, 9, 10, 10.5, 11, 12],
      },
    ],
  },
  {
    id: 7,
    brand: 'JORDAN',
    silhouette: '4',
    name: 'Air Jordan 4 Retro',
    basePrice: 949900,
    colorways: [
      {
        id: 'jordan4-military-black',
        name: 'Military Black',
        reference: 'FV5029-003',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3584378a-059a-4a90-8d05-1f5d3c1e5f0a/AIR+JORDAN+4+RETRO.png',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'jordan4-thunder',
        name: 'Thunder',
        reference: 'CT8527-010',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f7ccce7-6d18-42d3-9a2c-5f6d62c4d4d5/air-jordan-4-retro-shoe-0KjJ5b.png',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'jordan4-red-cement',
        name: 'Red Cement',
        reference: '308497-062',
        image:
          'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9280d183-3ec9-45a6-8a07-97fbf8b0a464/air-jordan-4-retro-shoe-5kBdqJ.png',
        sizes: [7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: 8,
    brand: 'PUMA',
    silhouette: 'SUEDE XL',
    name: 'Suede XL',
    basePrice: 319900,
    colorways: [
      {
        id: 'suede-black-white',
        name: 'Puma Black-White',
        reference: '374915-01',
        image:
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:FAFAFA,w_2000,h_2000/global/374915/01/mod01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers',
        sizes: [6, 7, 8, 9, 10, 11, 12],
      },
      {
        id: 'suede-regal-red',
        name: 'Regal Red',
        reference: '374915-02',
        image:
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:FAFAFA,w_2000,h_2000/global/374916/01/mod01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'suede-peacoat',
        name: 'Peacoat',
        reference: '374915-03',
        image:
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:FAFAFA,w_2000,h_2000/global/374917/01/mod01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers',
        sizes: [7, 8, 9, 10, 11, 12],
      },
    ],
  },
  {
    id: 9,
    brand: 'PUMA',
    silhouette: 'SPEEDCAT',
    name: 'Speedcat OG',
    basePrice: 379900,
    colorways: [
      {
        id: 'speedcat-black',
        name: 'Puma Black',
        reference: '398846-01',
        image:
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:FAFAFA,w_2000,h_2000/global/398846/01/mod01/fnd/PNA/fmt/png/Speedcat-OG-Unisex-Sneakers',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'speedcat-white',
        name: 'Puma White',
        reference: '398846-02',
        image:
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:FAFAFA,w_2000,h_2000/global/398847/01/mod01/fnd/PNA/fmt/png/Speedcat-OG-Unisex-Sneakers',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'speedcat-red',
        name: 'For All Time Red',
        reference: '398846-03',
        image:
          'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:FAFAFA,w_2000,h_2000/global/398848/01/mod01/fnd/PNA/fmt/png/Speedcat-OG-Unisex-Sneakers',
        sizes: [6, 7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: 10,
    brand: 'NEW BALANCE',
    silhouette: '550',
    name: 'New Balance 550',
    basePrice: 479900,
    colorways: [
      {
        id: 'nb550-white-green',
        name: 'White/Green',
        reference: 'BB550HG1',
        image:
          'https://nb.scene7.com/is/image/NB/bb550hg1_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'nb550-white-navy',
        name: 'White/Navy',
        reference: 'BB550GH1',
        image:
          'https://nb.scene7.com/is/image/NB/bb550gh1_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [7, 8, 8.5, 9, 9.5, 10, 11],
      },
      {
        id: 'nb550-white-red',
        name: 'White/Red',
        reference: 'BB550HL1',
        image:
          'https://nb.scene7.com/is/image/NB/bb550hl1_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [6, 7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: 11,
    brand: 'NEW BALANCE',
    silhouette: '530',
    name: 'New Balance 530',
    basePrice: 449900,
    colorways: [
      {
        id: 'nb530-grey-navy',
        name: 'Grey/Navy',
        reference: 'ML530NRG',
        image:
          'https://nb.scene7.com/is/image/NB/ml530nrg_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'nb530-black-white',
        name: 'Black/White',
        reference: 'ML530BBW',
        image:
          'https://nb.scene7.com/is/image/NB/ml530bbw_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [5, 6, 7, 8, 9, 10],
      },
      {
        id: 'nb530-castlerock',
        name: 'Castlerock',
        reference: 'ML530CSR',
        image:
          'https://nb.scene7.com/is/image/NB/ml530csr_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: 12,
    brand: 'NEW BALANCE',
    silhouette: '9060',
    name: 'New Balance 9060',
    basePrice: 599900,
    colorways: [
      {
        id: 'nb9060-silver',
        name: 'Silver/Black',
        reference: 'U9060MDS',
        image:
          'https://nb.scene7.com/is/image/NB/u9060mds_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'nb9060-beige',
        name: 'Beige/Mocha',
        reference: 'U9060MCM',
        image:
          'https://nb.scene7.com/is/image/NB/u9060mcm_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [6, 7, 8, 9, 10, 11],
      },
      {
        id: 'nb9060-cream',
        name: 'Cream/Blue',
        reference: 'U9060MDB',
        image:
          'https://nb.scene7.com/is/image/NB/u9060mdb_nb_02_i?$pdpflexf2$&wid=880&hei=880',
        sizes: [7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: 13,
    brand: 'YEEZY',
    silhouette: '350',
    name: 'Yeezy Boost 350 V2',
    basePrice: 1099900,
    colorways: [
      {
        id: 'yeezy350-beluga',
        name: 'Beluga Reflective',
        reference: 'GW1229',
        image:
          'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1635345600',
        sizes: [8, 9, 10, 11, 12, 13],
      },
      {
        id: 'yeezy350-carbon',
        name: 'Carbon',
        reference: 'GW1228',
        image:
          'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Carbon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1620000000',
        sizes: [7, 8, 9, 10, 11, 12],
      },
      {
        id: 'yeezy350-zebra',
        name: 'Zebra',
        reference: 'GW1227',
        image:
          'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Zebra-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1610000000',
        sizes: [8, 9, 10, 11, 12],
      },
    ],
  },
  {
    id: 14,
    brand: 'YEEZY',
    silhouette: '700',
    name: 'Yeezy Boost 700',
    basePrice: 949900,
    colorways: [
      {
        id: 'yeezy700-wave-runner',
        name: 'Wave Runner',
        reference: 'GW0801',
        image:
          'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Wave-Runner-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1620000000',
        sizes: [8, 9, 10, 11, 12],
      },
      {
        id: 'yeezy700-vanta',
        name: 'Vanta',
        reference: 'GW0802',
        image:
          'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Vanta-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1630000000',
        sizes: [7, 8, 9, 10, 11],
      },
      {
        id: 'yeezy700-ash',
        name: 'Ash',
        reference: 'GW0803',
        image:
          'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Ash-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1600000000',
        sizes: [8, 9, 10, 11, 12, 13],
      },
    ],
  },
];
