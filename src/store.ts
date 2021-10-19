import { writable } from "svelte/store";

export interface Shadow {
  x: number;
  y: number;
  spread: number;
  blur: number;
}

export const shadow = writable<Shadow>({
  x: 0,
  y: 0,
  spread: 0,
  blur: 20,
});

export const imageUrl = writable<string>("/portrait.jpeg");
