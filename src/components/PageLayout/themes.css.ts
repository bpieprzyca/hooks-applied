import {createTheme, createThemeContract} from '@vanilla-extract/css';

export const variables = createThemeContract({
  button: {
    background: '',
    text: '',
  },
  leftPart: {
    background: '',
    text: '',
  },
  rightPart: {
    background: '',
    text: '',
  },
});

export const lightTheme = createTheme(variables, {
  button: {
    background: '#cc0000',
    text: 'white',
  },
  leftPart: {
    background: '#cecece',
    text: '#2f4f4f',
  },
  rightPart: {
    background: 'white',
    text: '#000000',
  },
});

export const darkTheme = createTheme(variables, {
  button: {
    background: '#f0f8ff',
    text: '#800080'
    ,
  },
  leftPart: {
    background: 'white',
    text: '#696969'
    ,
  },
  rightPart: {
    background: '#008080',
    text: 'white',
  },
});
