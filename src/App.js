import React from 'react';
import InlineForm from './components/InlineForm';

function App() {
  return (
    <div className="container py-5">
      <InlineForm
        inputName="q"
        buttonText="Search"
      />
    </div>
  );
}

export default App;
