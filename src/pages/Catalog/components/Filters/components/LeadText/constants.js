import { filters, NB_SP, MDASH } from '__constants__';

const text0 = `
  Мы${NB_SP}предлагаем ознакомиться с${NB_SP}самыми разными вариантами реализации закрытых
  систем хранения, от${NB_SP}шкафов-купе, до${NB_SP}распашных и${NB_SP}складных шкафов,
  от${NB_SP}стиля модерн, до${NB_SP}классицизма и${NB_SP}неоклассики. Вы${NB_SP}можете выбрать
  любой из${NB_SP}имеющихся в${NB_SP}каталоге вариантов или придумать свой неповторимый дизайн.
  Мы${NB_SP}реализуем любую вашу идею, с${NB_SP}учетом особенностей помещения, потребностей
  в${NB_SP}хранении вещей и${NB_SP}предпочтению в${NB_SP}выборе отделки${NB_SP}${MDASH} будь${NB_SP}то
  кожа, металл, стекло или резные пилястры с${NB_SP}патиной и${NB_SP}необычные барельефы.
  Выберите свой стиль, а${NB_SP}мы${NB_SP}реализуем мечту в${NB_SP}реальность!
`;

const text1 = `
  Гардеробная комната${NB_SP}${MDASH} это максимально продуманное функциональное помещение,
  которое является продолжением интерьера вашего дома. Более чем двадцатилетний успешный опыт
  проектирования гардеробных помогает нам с${NB_SP}ювелирной точностью создать идеальную систему
  хранения с${NB_SP}учетом всех особенностей интерьера и${NB_SP}предпочтений заказчика. Модели,
  представленные в${NB_SP}каталоге, вы${NB_SP}можете выбрать как отправную точку создания дизайна
  гардеробной вашей мечты и${NB_SP}позволить нам эту мечту осуществить!
`;

const text2 = `
  Разнообразие моделей персонализированных аксессуаров для внутреннего наполнения гардеробных
  и${NB_SP}шкафов, позволит вам выбрать именно те${NB_SP}варианты, которые максимально точно решат
  все задачи по${NB_SP}оптимальному и${NB_SP}удобному хранению вещей. Огромный выбор выдвижных полок
  и${NB_SP}органайзеров, закрытых и${NB_SP}открытых секций, брючницы и${NB_SP}галстучницы, обувницы
  и${NB_SP}корзины, горизонтальные и${NB_SP}вертикальные модули, лифтовое и${NB_SP}спиральное
  вешало... Продолжать можно бесконечно. В${NB_SP}каталоге вы${NB_SP}можете ознакомиться лишь
  с${NB_SP}небольшой частью всевозможных аксессуаров для хранения, а${NB_SP}изготовить
  мы${NB_SP}можем все, что вы${NB_SP}можете себе представить!
`;

export const texts = {
  [filters.sections[0].id]: text0,
  [filters.sections[1].id]: text1,
  [filters.sections[2].id]: text2,
  [filters.sections[3].id]: text2,
};
