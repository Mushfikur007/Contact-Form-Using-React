import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Nav from "./components/Nav/Nav";


function App() {

  return (
    <div>
      <Nav/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App;

