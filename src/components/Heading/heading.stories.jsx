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
  args: {
    children: "Nem sei"
  }
}

export const Default = {

}

// export const Template = (args) => <Heading {...args}/>