export const getCollectionName = (section) => {
  let sectionCollection;

  switch (section) {
    case 'cupboards': {
      sectionCollection = 'cupboardCollection';
      break;
    }
    case 'wardrobes': {
      sectionCollection = 'wardrobeCollection';
      break;
    }
    case 'accessories': {
      sectionCollection = 'accessoriesCollection';
      break;
    }
    case 'lightingSystems': {
      sectionCollection = 'lightingSystemsCollection';
      break;
    }
    default: {
      sectionCollection = 'cupboardCollection';
    }
  }

  return sectionCollection;
};
