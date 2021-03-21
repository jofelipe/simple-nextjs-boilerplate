import Header from 'components/Header';

import { Wrapper } from './styles';

interface Main {
  children: JSX.Element;
}

const Main = ({ children }: Main) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Main;
