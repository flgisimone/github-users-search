import React, {useState, useContext} from "react";

const AppContext = React.createContext()

type FormValues = {
    valueQuery: string;
}

const AppProvider = ({children}) => {

    const [value, setValue] = useState<FormValues>({valueQuery: ""})

    return(
        <AppContext.Provider value = {
            {
                value, setValue
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }