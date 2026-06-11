const rootElement = document.getElementById("root");
const AppComponent = window.MaisonNekoApp || window.App;

if (!rootElement) {
  throw new Error("Maison Neko root element was not found.");
}

if (!AppComponent) {
  throw new Error("Maison Neko App component was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
