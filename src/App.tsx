import { AppProvider } from "./utils/context.tsx"
import Searchbar from './components/Searchbar/Searchbar';
import UserTab from "./components/UserTab/UserTab.tsx";
import Footer from "./components/Footer/Footer.tsx";

import './App.css';

function App() {

  return (
    <AppProvider>
        <main>
          <Searchbar />
          <UserTab />
          <Footer />
        </main>
    </AppProvider>
  )
}

export default App
