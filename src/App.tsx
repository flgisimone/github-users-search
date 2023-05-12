import { AppProvider } from "./utils/context.tsx"
import Searchbar from './components/Searchbar/Searchbar';
import UserTab from "./components/UserTab/UserTab.tsx";
import Footer from "./components/Footer/Footer.tsx";


import Typography from '@mui/material/Typography'

import './App.css';

function App() {

  return (
    <AppProvider>
        <main>
          <Typography sx={{alignSelf: "flex-start", fontSize: 28, fontWeight: 600}}>Github Users Search</Typography>
          <Searchbar />
          <UserTab />
          <Footer />
        </main>
    </AppProvider>
  )
}

export default App
