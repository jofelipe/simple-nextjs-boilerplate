import Header from 'components/Header';

import { Wrapper } from './styles';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}

export default Main;

