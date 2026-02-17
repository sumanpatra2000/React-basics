import Header from './components/Header';
import Highlights from './components/Highlights';
import LatestEvent from './components/LatestEvent';
import Footer from './components/Footer';

function App() {
  const userName = 'Suman';

  return (
    <>
      <Header userName={userName} />
      <main>
        <Highlights />
        <LatestEvent />
      </main>
      <Footer />
    </>
  );
}

export default App;
