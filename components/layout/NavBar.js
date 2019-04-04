import Link from 'next/link'
import styled from 'styled-components'

const Bar = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 1rem 0.5rem;
  width: 100vw;

  a {
    margin-right: 0.5rem;
    padding: 0.5rem;
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const NavBar = () => (
  <Bar>
    <span>NavBar</span>
    <section>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </section>
  </Bar>
)

export default NavBar
