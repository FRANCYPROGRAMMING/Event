const AlertClock = ({ showAlert }) => {
  return (
    <button onClick={showAlert}>
      Show Current Time
    </button>
  );
};

const App = () => {

  const showAlert = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <h1>Alert Clock App</h1>
      <AlertClock showAlert={showAlert} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));