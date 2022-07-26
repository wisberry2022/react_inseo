import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main king="inseo" work="drink" />
      <Main king="inseo" work="sing" />
      <Main king="inseo" work="study" />
      <Main king="inseo" />
      <Footer />
    </Wrapper>
  )
}

export default App;
