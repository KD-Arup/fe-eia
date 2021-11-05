import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({children}) =>{
    
    const [projData, setProjData] = useState(null)
    const projDataLoaded = !!projData;

    return (
        <TableContext.Provider value={{ projData, setProjData, projDataLoaded }}>
            {children}
        </TableContext.Provider>
    )
};