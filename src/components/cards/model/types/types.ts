import { ICard } from '../../../card/model/types/types';

export interface ICards {
  isLoading?: boolean;
  pizza: ICard[];
}
