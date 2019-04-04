import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  background-color: ${props => props.theme.primaryColor};
`

export default Main
