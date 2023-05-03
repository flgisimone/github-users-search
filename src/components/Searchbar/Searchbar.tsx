import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss"

import { useGlobalContext } from "../../utils/context";

const Searchbar = () => {

    const [changeQuery, setChangeQuery] = useState("")
    const { value, setValue } = useGlobalContext()
    
    const onHandleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputChangeQuery = e.target.value;
        setChangeQuery(inputChangeQuery)
    }

    const onHandleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        setValue(changeQuery)
    }

    console.log(changeQuery)
    console.log(value)
    
  return (
    <div className={styles.Searchbar}>
        <form onSubmit={onHandleSubmit}>
            <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            label="Insert username"
            placeholder="Insert username"
            onChange={onHandleSetQuery}
            value={changeQuery}
            />
            <IconButton aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </form>
    </div>
  )
}

export default Searchbar