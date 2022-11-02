import './scss/styles'
import RandomFeature from './RandomFeature';
import SearchMethod from './SearchMethod';

function App() {

  return (
    <main>
    <div className='app'>
      
      <section className='feature'>
        <RandomFeature />
      </section>
      <section className='search'>
        <h1 id='topOfPage'>Bar Menu Helper</h1>
        <SearchMethod />
      </section>
    </div>
    <footer className='topOfPage'>
        <button><a href="#topOfPage" className='toTop'>To Top</a></button>
        <p>Made at <a href="https://www.junocollege.com">Juno College</a></p>
    </footer>
    </main>
  );
}

export default App;
