import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss"

import { useGlobalContext } from "../../utils/context";

const Searchbar = () => {

    const [changeQuery, setChangeQuery] = useState("")
    const { setQuery } = useGlobalContext()
    
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setQuery(changeQuery)
  }

    const onHandleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangeQuery(e.target.value)
    }
    
  return (
    <form onSubmit={onHandleSubmit} className={styles.form}>
      <img src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="github avatar" width={50} />
      <TextField
        sx={{width: 1}}
        id="outlined-basic"
        variant="outlined"
        size="small"
        label="Insert username"
        placeholder="Insert username"
        onChange={onHandleSetQuery}
        value={changeQuery}
      />
      <IconButton aria-label="search" type="submit" sx={{p: 0, m: 0}}>
        <SearchIcon style={{ fill: "#1976d2", fontSize: 30 }} />
      </IconButton>
    </form>
  )
}

export default Searchbar