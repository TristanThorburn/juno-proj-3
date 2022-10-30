import './scss/styles'
import RandomFeature from './RandomFeature';
import SearchMethod from './SearchMethod';

function App() {

  return (
    <div className='app'>
      <section className='feature'>
        <RandomFeature />
      </section>
      <section className='search'>
        <h1>Bar Menu Helper</h1>
        <SearchMethod />
      </section>
    </div>
  );
}

export default App;
