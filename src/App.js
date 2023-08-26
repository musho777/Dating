import './App.css';
import { useEffect } from 'react';
import { Color } from './Color';

import { Router } from './routes';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = Color('dark').bg;
  }, []);
  return (
    <div >
      <Router />
    </div>
  );
}

export default App;
