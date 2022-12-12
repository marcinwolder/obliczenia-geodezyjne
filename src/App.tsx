import { Header } from "./components/Header";
import { Azymuty } from "./components/Azymuty";
import { PoleDzialki } from "./components/PoleDzialki";
import { HausbrandtPage } from "./pages/HausbrandtPage";

function _App() {
  return (
    <>
      <Header/>
      <Azymuty/>
      <PoleDzialki/>
      <HausbrandtPage/>
    </>
  );
}

export const App = _App;
