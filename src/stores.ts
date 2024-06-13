import { type Writable, writable } from 'svelte/store'
import { LOCAL_STORAGE_USER_KEY } from "./lib/constants";
import type { User } from './lib/response-types';

export const user: Writable<User | null> = writable(
  localStorage.getItem(LOCAL_STORAGE_USER_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || 'null') : null
)
