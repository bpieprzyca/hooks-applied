export enum themes {
    dark = 'dark',
    light = 'light',
};

export type Theme = themes.dark | themes.light;

export const DEFAULT_THEME = themes.light;
