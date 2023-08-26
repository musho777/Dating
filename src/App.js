import { useEffect } from 'react';
import './App.css';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Color } from './Color';
import { VerifyCode } from './Components/VerifyCode';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = Color('dark').bg;
  }, []);
  return (
    <div className="App">
      {/* <Input placeholder={'sss'} /> */}
      {/* <Button disabled={true} title={'sss'} /> */}
      <VerifyCode />
    </div>
  );
}

export default App;
