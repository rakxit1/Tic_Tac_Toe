export interface InitialMarkerInterface {
  id: number;
  markValue: string | null | number;
  unEditable: boolean;
}

export const threeByThreeMarker: InitialMarkerInterface[] = [
  {id: 1, markValue: null, unEditable: false},
  {id: 2, markValue: null, unEditable: false},
  {id: 3, markValue: null, unEditable: false},
  {id: 4, markValue: null, unEditable: false},
  {id: 5, markValue: null, unEditable: false},
  {id: 6, markValue: null, unEditable: false},
  {id: 7, markValue: null, unEditable: false},
  {id: 8, markValue: null, unEditable: false},
  {id: 9, markValue: null, unEditable: false},
];

export const fourByFourMarker: InitialMarkerInterface[] = [
  {id: 1, markValue: null, unEditable: false},
  {id: 2, markValue: null, unEditable: false},
  {id: 3, markValue: null, unEditable: false},
  {id: 4, markValue: null, unEditable: false},
  {id: 5, markValue: null, unEditable: false},
  {id: 6, markValue: null, unEditable: false},
  {id: 7, markValue: null, unEditable: false},
  {id: 8, markValue: null, unEditable: false},
  {id: 9, markValue: null, unEditable: false},
  {id: 10, markValue: null, unEditable: false},
  {id: 11, markValue: null, unEditable: false},
  {id: 12, markValue: null, unEditable: false},
  {id: 13, markValue: null, unEditable: false},
  {id: 14, markValue: null, unEditable: false},
  {id: 15, markValue: null, unEditable: false},
  {id: 16, markValue: null, unEditable: false},
];

export const winningChances3_3: Array<number[]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const winningChances4_4: Array<number[]> = [
  [0, 1, 2],
  [1, 2, 3],
  [4, 5, 6],
  [5, 6, 7],
  [8, 9, 10],
  [9, 10, 11],
  [12, 13, 14],
  [13, 14, 15],
  [0, 4, 8],
  [4, 8, 12],
  [1, 5, 9],
  [5, 9, 13],
  [2, 6, 10],
  [6, 10, 14],
  [2, 6, 10],
  [6, 10, 14],
  [3, 7, 11],
  [7, 11, 15],
  [0, 5, 10],
  [1, 6, 10],
  [2, 5, 8],
  [3, 6, 9],
  [4, 9, 14],
  [5, 10, 15],
  [6, 9, 12],
  [7, 10, 13],
];

export const refreshImage: string =
  'https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png';

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getUserWinningPossibilities = (
  item: InitialMarkerInterface[],
  markValue: string,
) => {
  const output = item
    .map((a: InitialMarkerInterface) => {
      if (a.markValue === markValue) {
        return {
          ...a,
          markValue: 1,
        };
      } else {
        return {
          ...a,
          markValue: 0,
        };
      }
    })
    .map((b: InitialMarkerInterface) => {
      return b.markValue;
    });
  return output;
};
