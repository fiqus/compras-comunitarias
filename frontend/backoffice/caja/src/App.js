import StatusBar from './components/StatusBar'
import Table from './components/Table'

function App() {
  const styles = {
    statusBarContainer: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center",
    }
  }
  return (
    <div style={styles.statusBarContainer}>
      <StatusBar></StatusBar>
      <Table></Table>
    </div>
  );
}

export default App;
