import { AppProvider } from "./utils/context.tsx"
import Searchbar from './components/Searchbar/Searchbar';

import './App.css';

function App() {
  return (
    <AppProvider>
        <main>
          <Searchbar />
        </main>
    </AppProvider>
  )
}

export default App
