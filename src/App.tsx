import { ToastContainer } from 'react-toastify';
import CardSlider from './components/cardSlider';

function App() {
  return (
    <>
       <CardSlider/>
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}
export default App;