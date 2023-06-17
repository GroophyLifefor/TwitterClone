import './App.scss';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import Trend from './Trend/Trend';

function App() {
  return (
    <div className='viewport'>
      <div className="innerport">
        <Navbar />
        <Content />
        <Trend />
      </div>
    </div>
  );
}

export default App;