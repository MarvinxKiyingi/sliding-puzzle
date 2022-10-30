import { IBoard } from '../models/IBoard';

export const getIndex = ({ column, row }: IBoard) => {
  return parseInt(row.toString(), 10) * 350 + parseInt(column.toString(), 10);
};
