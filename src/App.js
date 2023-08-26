import { useEffect } from 'react';
import './App.css';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Color } from './Color';
import { VerifyCode } from './Components/VerifyCode';
import { ChackBox } from './ui/checkbox';
import LinearDeterminate from './Components/Steper';
import { Layout } from './Components/Layout';
import { Login } from './Pages/LoginPage';
import { VerifyCodePage } from './Pages/VerifyCodePage';
import { NamePage } from './Pages/NamePage';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = Color('dark').bg;
  }, []);
  return (
    <div className="App">
      <Login />
      {/* <VerifyCodePage /> */}
      {/* <NamePage /> */}
    </div>
  );
}

export default App;
