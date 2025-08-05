import { ToastContainer } from 'react-toastify';
import Card from './components/card';
import CardSlider from './components/cardSlider';

function App() {
  return (
    <>
       <Card/>
       <CardSlider/>
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}
export default App;