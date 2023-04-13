import { Heading } from "./heading";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global-styles';


export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {Story()}
        <GlobalStyles />
      </ThemeProvider>
    )
  ],
  argTypes: {
    children: { type: 'string'},
  },
  args: {
    children: "Heading",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'Light', value: '#FFF' },
        { name: 'Dark', value: '#0A1128' }
      ]
    }
  }
}

export const Primary = {
  args: {
    children: 'O texto está escuro.',
    colorDark: true
  }
}

export const Dark = {
  args: {
    children: 'O texto está claro.',
    colorDark: false
  }
}

// export const Template = (args) => <Heading {...args}/>