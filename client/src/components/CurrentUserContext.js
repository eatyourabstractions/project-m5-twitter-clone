import React,{createContext, useEffect} from "react";

export const CurrentUserContext = createContext(null);


export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");
  
    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:31415/api/me/profile')
            .then(response => response.json())
            .then(data => {
                setCurrentUser(data.profile)
                setStatus('idle')
            });
    
    }, []);
  
    return (
      <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
      </CurrentUserContext.Provider>
    );
  };