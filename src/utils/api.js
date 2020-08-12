import { gql } from '@apollo/client';
import { client } from './client';
import { getCollectionName } from './getCollectionName';
import { batchSize } from '../constants';

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
          imageFull {
            url
          }
          imageMinified: imageFull {
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
