// import {BrowserRouter as Router, Switch,Route, BrowserRouter} from 'react-router-dom';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.scss';
import Barchart from './screens/chart/chart.screen';
import Form from './screens/form/form.screen';


function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
           <Route path="/form" element={<Form />} />
           <Route path='/chart' element={<Barchart />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
