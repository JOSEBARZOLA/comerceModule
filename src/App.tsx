import { ToastContainer } from 'react-toastify';
import Card from './components/card';

function App() {
  return (
    <>
       <Card/>
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}
export default App;