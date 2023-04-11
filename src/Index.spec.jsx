// import { renderTheme } from "./styles/renderTheme"
import {render} from '@testing-library/react'
// import Index from '.'
import Home from './templates/App/Home'

test('render learn react link', () => {
  const {debug} =render(<Home />)

  debug()
})