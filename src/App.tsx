import Header from './components/common/Header';
import AppRouter from './services/AppRouter';

function App() {
  return (
    <>
      <AppRouter>
        <Header />
      </AppRouter>
    </>
  );
}

export default App;

// return <>
// <Header/>
// </>;
