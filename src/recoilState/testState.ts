import { atom } from 'recoil';

export const testState = atom({
  key: 'textState',
  default: [] as { id: string; randomNumber: number }[],
});
