// import { ThemeProvider } from 'styled-components';
// import { theme } from '../src/styles/theme';
// import { GlobalStyles } from '../src/styles/global-styles';


/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


// export const decorator = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <Story />
//       <GlobalStyles />
//     </ThemeProvider>
//   )
// ]

