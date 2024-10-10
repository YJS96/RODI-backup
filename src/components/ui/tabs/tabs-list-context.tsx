import { createContext } from '@/lib/createContext';

export interface TabsListContextValue {
  type: 'segmented' | 'branch';
}

export const [TabsListProvider, useTabsListContext] =
  createContext<TabsListContextValue>('tabs-list-context');
