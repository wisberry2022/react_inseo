const Main = ({ king, work }) => {
  return (
    <main>
      {king} likes {work}!
    </main>
  )
}

Main.defaultProps = {
  work: 'playing'
}
export default Main;