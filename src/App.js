import './App.css';
import { useCallback, useMemo, useState } from 'react';
import { useEffect } from 'react';
import SampleComponent from './components/SampleComponent';

const set = new Set();

function App() {
  const [form, setForm] = useState({
    first: {age: 1},
    second: {age: 2}
  });

  useEffect(() => {
    console.log('Initial');
  }, []);

  const handleChange = useCallback((key, val) => setForm(f => ({ ...f, [key]: val })), []);
  set.add(handleChange);
  console.log('Set ', set);

  const getValue = (key) => form[key];

  const isError = useCallback((key) => form[key].age % 41 === 0, [form]);

  return (
    <div className="App">
      <h3>Hello test</h3>
      <SampleComponent id={'first'} error={isError('first')} data={getValue('first')} handleChange={handleChange} />
      <SampleComponent id={'second'} error={isError('second')} data={getValue('second')} handleChange={handleChange} />
    </div>
  );
}

export default App;
