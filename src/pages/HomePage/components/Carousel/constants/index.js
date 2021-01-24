import topImg1 from '../assets/top-img1.jpg';
import topImg2 from '../assets/top-img2.jpg';
import topImg3 from '../assets/top-img3.jpg';
import topImg4 from '../assets/top-img4.jpg';
import topImg5 from '../assets/top-img5.jpg';
import topImg6 from '../assets/top-img6.jpg';

import topImgTab1 from '../assets/top-img-tab1.jpg';
import topImgTab2 from '../assets/top-img-tab2.jpg';
import topImgTab3 from '../assets/top-img-tab3.jpg';
import topImgTab4 from '../assets/top-img-tab4.jpg';
import topImgTab5 from '../assets/top-img-tab5.jpg';
import topImgTab6 from '../assets/top-img-tab6.jpg';

import topImgMob1 from '../assets/top-img-mob1.jpg';
import topImgMob2 from '../assets/top-img-mob2.jpg';
import topImgMob3 from '../assets/top-img-mob3.jpg';
import topImgMob4 from '../assets/top-img-mob4.jpg';
import topImgMob5 from '../assets/top-img-mob5.jpg';
import topImgMob6 from '../assets/top-img-mob6.jpg';

export const PAGES = [
  {
    titles: [
      'Частный мебельер',
    ],
    subtitles: [],
    texts: [
      'Шоу-рум мебели премиум класса',
      'по индивидуальным дизайн-проектам',
    ],
    imageSet: {
      small: topImgMob1,
      medium: topImgTab1,
      large: topImg1,
    },
    to: '/catalog',
  },
  {
    titles: [
      'Элегантная классика',
    ],
    subtitles: [
      'в лучших традициях',
      'качества',
    ],
    texts: [
      'Премиальные детали',
      'Изысканный дизайн',
    ],
    imageSet: {
      small: topImgMob2,
      medium: topImgTab2,
      large: topImg2,
    },
    to: '/catalog?section=cupboard&style=classic#filters',
  },
  {
    titles: [
      'Гардеробные',
      'системы',
    ],
    subtitles: [],
    texts: [
      'Индивидуальное проектирование',
      'любой сложности',
      'Мы можем то, что другим не под силу',
    ],
    imageSet: {
      small: topImgMob3,
      medium: topImgTab3,
      large: topImg3,
    },
    to: '/catalog?section=wardrobe#filters',
  },
  {
    titles: [
      'Дизайнерская мебель',
      'в стиле модерн',
    ],
    subtitles: [],
    texts: [
      'Совершенный стиль',
      'Безупречное качество',
    ],
    imageSet: {
      small: topImgMob4,
      medium: topImgTab4,
      large: topImg4,
    },
    to: '/catalog?section=cupboard&style=modern#filters',
  },
  {
    titles: [
      'Комфорт, продуманный',
      'до мелочей',
    ],
    subtitles: [],
    texts: [
      'Эксклюзивные решения',
      'для организации хранения',
    ],
    imageSet: {
      small: topImgMob5,
      medium: topImgTab5,
      large: topImg5,
    },
    to: '/catalog?section=accessories#filters',
  },
  {
    titles: [
      'Истинное качество',
      'в деталях',
    ],
    subtitles: [],
    texts: [
      'Современные мебельные технологии,',
      'материалы и комплектующие',
    ],
    imageSet: {
      small: topImgMob6,
      medium: topImgTab6,
      large: topImg6,
    },
    to: '/catalog?section=lightingSystems#filters',
  },
];
