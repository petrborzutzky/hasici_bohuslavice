export type UsersRowData = {
  'Star. poz.': number | null;
  TÝM: string | null;
  Pohlaví?: 'MUŽI' | 'ŽENY' | null;
  LP: number | null;
  PP: number | null;
  'VÝSLEDNÝ ČAS': number | null;
  'PRŮBĚŽNÉ UMÍSTĚNÍ': number | null;
  Odběhnuto: Date | null;
};

export type UsersRowDataZadek = {
  'Star. poz.': number | null;
  TÝM: string | null;
  Pohlaví?: 'MUŽI' | 'ŽENY' | null;
  'Čas 1': number | null;
  'Čas 2': number | null;
  'VÝSLEDNÝ ČAS': number | null;
  'PRŮBĚŽNÉ UMÍSTĚNÍ': number | null;
  Odběhnuto: Date | null;
};
