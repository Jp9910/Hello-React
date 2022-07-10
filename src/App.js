import Banner from './components/Banner/Banner.js'; //".js" (or any file extension) is optional
import Form from './components/Form';
//If no file is specified, it tries to import the file named index in the directory

function App() {
  return (
    <div className="App">
      <Banner/>
      <Form/>
    </div>
  );
}

export default App;
