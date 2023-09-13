import './App.css';
import ExchangeApp from './comps/exchangeApp';
import { MDBInput } from 'mdbreact';

function App() {
  return (
    <div className="App">
      {/* <ExchangeApp/> */}
      <div>
      <MDBInput
        label="Your Name"
        icon="user"
        group
        type="text"
        validate
        error="wrong"
        success="right"
      />
      {/* Add more MDBInput components or other form elements as needed */}
    </div>
    </div>
  );
}

export default App;
