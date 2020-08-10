import { gql } from '@apollo/client';
import { client } from './client';

export const fetchCatalogByFilter = ({ section, style, doorType }) => client.query({
  query: gql`
    {
      catalogCollection(where: {
        ${section}: true
        ${style !== 'any' ? `${style}: true` : ''}
        ${doorType !== 'any' ? `${doorType}: true` : ''}
      }){
        items {
          name
          imageFull {
            url
          }
          imageMinified {
            url
          }
          sys {
            id
          }
        }
      }
    }
  `,
});
