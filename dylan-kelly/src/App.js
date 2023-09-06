import './App.css';
import StickyNavbar from './StickyNavbar';
import Form from './Form';
import Intro from './Intro';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <Intro />
      <Testimonials />
      <Form />
    </div>
  );
}

export default App;
