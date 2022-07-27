import Header from './Header';

function App() {

  // jsx 바깥의 주석
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: 'red' }} name="왕인서" age={27} />
      {/* component 자체에는 style을 줄 수 없다 */}
      <nav>
        <ul>
          <li><a href="#!" style={{ color: 'red', fontSize: '40px' }}>and my mates are all they trying to calm me down</a></li>
          <li><a href="#!">cause shouting your name all over town</a></li>
          <li><a href="#!">i'm swearing if i go there now</a></li>
          <li><a href="#!">i can change your mind turn it all around</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default App;