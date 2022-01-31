import {React} from 'react';
import StatusBar from './components/StatusBar'
import Table from './components/Table'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <StatusBar></StatusBar>
      <Table></Table>
    </div>
  );
}

export default App;
