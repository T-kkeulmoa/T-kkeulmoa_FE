import ReactDOM from "react-dom";
import PageRouter from "./app/PageRouter";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("@/mock/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.render(<PageRouter />, document.getElementById("root"));
});

//ReactDOM.render(<PageRouter />, document.getElementById("root"));
