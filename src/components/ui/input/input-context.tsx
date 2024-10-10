import { createContext } from '@/lib/createContext';

export interface InputContextValue {
  state: 'default' | 'disabled' | 'muted' | 'error';
  size: 'default' | 'small-38' | 'small-28';
}

export const [InputProvider, useInputContext] = createContext<InputContextValue>('input-context');
