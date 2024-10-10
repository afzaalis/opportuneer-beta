import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// Provider untuk UserContext
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Menyimpan informasi pengguna

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook untuk menggunakan UserContext
export const useUser = () => {
    return useContext(UserContext);
};
