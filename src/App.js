import './App.css';
import Footer from './components/Footer';
import NotificationCard from './components/NotificationCard';

const App = ()=> {
  return (
    <div className='app'>
      <NotificationCard/>
      <Footer/>
    </div>
  );
}

export default App;