import { filters } from '__constants__';
import cupboard from './assets/cupboard.webp';
import wardrobe from './assets/wardrobe.webp';
import accessories from './assets/accessories.webp';

export const images = {
  [filters.sections[0].id]: cupboard,
  [filters.sections[1].id]: wardrobe,
  [filters.sections[2].id]: accessories,
  [filters.sections[3].id]: accessories,
};
