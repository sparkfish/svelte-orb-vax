import { writable, derived } from 'svelte/store';

export const apiData = writable({});

export const locations = derived(apiData, ($apiData) => {
  if ($apiData){
    return $apiData.map(loc => loc);
  }
  return [];
});
