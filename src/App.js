import './scss/styles'
import RandomFeature from './RandomFeature';
import SearchMethod from './SearchMethod';

function App() {

  return (
    <div className='app'>
      <button class='topOfPage'><a href="#topOfPage">To Top</a></button>
      <section className='feature'>
        <RandomFeature />
      </section>
      <section className='search'>
        <h1 id='topOfPage'>Bar Menu Helper</h1>
        <SearchMethod />
      </section>
    </div>
  );
}

export default App;
