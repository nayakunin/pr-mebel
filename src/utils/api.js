import { gql } from '@apollo/client';
import { batchSize } from '__constants__';
import { client } from './client';
import { getCollectionName } from './getCollectionName';

export const fetchCatalogByFilter = ({ section, style, doorType }, page) => client.query({
  query: gql`
    {
      ${getCollectionName(section)}(where: {
        ${style !== 'any' ? `${style}: true` : ''}
        ${doorType !== 'any' ? `${doorType}: true` : ''}
      }, order: [id_ASC], limit: ${batchSize}, skip: ${batchSize * page}){
        total
        items {
          id
          collection
          description
          imageFull: image {
            url(transform: {
              format: JPG_PROGRESSIVE
            })
          }
          imageMedium: image {
            url(transform: {
              width: 750
              height: 500
              format: JPG_PROGRESSIVE
            })
          }
          imageMinified: image {
            url(transform: {
              width: 435
              height: 290
              format: JPG_PROGRESSIVE
            })
          }
          sys {
            id
          }
        }
      }
    }
  `,
});
