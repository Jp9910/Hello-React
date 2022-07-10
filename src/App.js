import Banner from './components/Banner/Banner.js'; //".js" (or any file extension) is optional
//If no file is specified, it tries to import the file named index in the directory
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextField label="Name" placeholder="Type your name"/>
      <TextField label="Role" placeholder="Type your role"/>
      <TextField label="Name" placeholder="Type your name"/>
    </div>
  );
}

export default App;
