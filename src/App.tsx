import './App.css';

function Square({ content } : { content: string }) {
  return (
    <div className="square">
      {content}
    </div>
  );
}

function App() {
  return (
    <section>
      <h2>Frunez Shyna Cayanan</h2>
      <Square content="CPEITEL" />
    </section>
  );
}

export default App;