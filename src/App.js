import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMG</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em (Kg) Ex: 90" />

        <input type="text" placeholder="Altura em (Cm) Ex: 180" />

        <button>Calcular</button>
      </div>
      <h2>Seu IMC foi 25, você esta abaixo do peso!</h2>
    </div>
  );
}
