import React, {useState, useContext} from "react";

const AppContext = React.createContext<ICreateContext>({
    query: "Github",
    setQuery: () => {},
    user: {},
    setUser: () => {}
})

interface IChildren {
    children: React.ReactNode;
  }

interface ICreateContext {
    query: string,
    setQuery: (query: string) => void,
    user: any,
    setUser: (user: object) => void
}

interface IUser {
      id: number,
      avatar_url: string,
      login: string,
      updated_at: string,
      html_url: string,
      bio: string,
      public_repos: string,
      followers: string,
      following: string,
  }

const AppProvider = ({children}: IChildren) => {

    const [query, setQuery] = useState("")
    const [user, setUser] = useState<IUser | {}>({})

    return(
        <AppContext.Provider value = {
            {
                query, setQuery,
                user, setUser
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