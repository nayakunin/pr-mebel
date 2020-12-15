import { NB_SP } from '__constants__';
import { ReactComponent as img1 } from '../assets/design-img.svg';
import { ReactComponent as img2 } from '../assets/design-img2.svg';
import { ReactComponent as img3 } from '../assets/design-img3.svg';
import { ReactComponent as img4 } from '../assets/design-img4.svg';

export const LIST = [
  {
    title: `Пришлите нам эскизы вашей мебели или просто оставьте свои
    контактные данные`,
    img: img1,
  },
  {
    title: `При необходимости, мы${NB_SP}уточним детали и${NB_SP}бесплатно
    разработаем проект в${NB_SP}ЗД`,
    img: img2,
  },
  {
    title: 'Предложим разные варианты наполнение шкафа или гардеробной',
    img: img3,
  },
  {
    title: 'Сформируем лучшее предложение в рамках бюджета',
    img: img4,
  },
];
