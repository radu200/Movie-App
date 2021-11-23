import momemt from 'moment';

export const formatDate = (date: string): string => {
  return momemt(date).format('LL');
};
