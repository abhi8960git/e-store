import {createContext,useState} from 'react'


// as the actual value you
// we pass the defaulut value 
// as the actual value u want to access
// all the stats stored in context 
// we make a state which is accessible to all 
export const userContext = createContext(
    {
        currentUser:null,
        setCurrentUser:()=>null,
        // blank function

    }
)


export const UserProvider =({children})=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value={currentUser, setCurrentUser};
    return <userContext.Provider value={value}>{children}</userContext.Provider>
}


// <UserProvider>

// </UserProvider>
