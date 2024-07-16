import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// import { Store } from '@/shared/types';

export const useStore = create /* <Store> */()(
  devtools(
    persist(subscribeWithSelector(immer((a) => ({ a }))), {
      name: 'local-storage'
    })
  )
);
