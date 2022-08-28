import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';

class App extends React.Component {
render() {
  return (
    <div style = {{backgroundColor : 'cornsilk' }}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

}
export default App;
