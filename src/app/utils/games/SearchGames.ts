import api from '@/app/api/api';
import { GameSearchResults } from '@/app/mixins/GameSearchResults';
import { SearchParams } from '@/app/mixins/SearchParamsTypes';

export const searchGames = async (params: SearchParams): Promise<GameSearchResults> => {
  const response = await api.get('/games/search', {
    params,
  });
  return response.data;
};
