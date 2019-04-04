import { GlobalStyle } from '../styled/global'
import Main from '../styled/Main'
import HtmlHead from './HtmlHead'
import NavBar from './NavBar'
import Title from '../styled/Title'

const Layout = ({ children, title }) => (
  <Main>
    <GlobalStyle />
    <HtmlHead title={title} />
    <NavBar />
    <Title>{title}</Title>
    {children}
  </Main>
)

export default Layout
