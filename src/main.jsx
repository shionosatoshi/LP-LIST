const rootElement = document.getElementById("root");
const AppComponent = window.SummerSavingApp || window.App;

if (!rootElement) {
  throw new Error("Summer saving root element was not found.");
}

if (!AppComponent) {
  throw new Error("Summer saving App component was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
