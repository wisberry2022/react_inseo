import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const what = 'she will listen this time even though they slurred';
  const DATA = [
    { id: 1, name: '박지윤' },
    { id: 2, name: '서태지' },
    { id: 3, name: '엄정화' },
    { id: 4, name: '변진섭' },
    { id: 5, name: '김완선' },
    { id: 6, name: '이상은' },
    { id: 7, name: '박남정' },
  ]

  return (
    <>
      <Header what={what} member={DATA} />
      <Main />
      <Footer />
      {what}
    </>
  );
}

export default App;
