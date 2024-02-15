import { Toaster } from "sonner";

import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Toaster richColors closeButton duration={3000} />
      <Home />;
    </>
  );
}

export default App;
