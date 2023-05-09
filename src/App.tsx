import { AppProvider } from "./utils/context.tsx"
import Searchbar from './components/Searchbar/Searchbar';
import UserTab from "./components/UserTab/UserTab.tsx";
import './App.css';

function App() {

  return (
    <AppProvider>
        <main>
          <Searchbar />
          <UserTab />
        </main>
    </AppProvider>
  )
}

export default App
