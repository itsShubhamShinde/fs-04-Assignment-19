import { createContext , useState} from "react";

export const GlobalData = createContext()

const DataProvider = ({children})=>{
    const [product,setProduct] = useState([])
    const [addtocart, setAddtocart] = useState([])

    return <GlobalData.Provider value={{product,setProduct, addtocart, setAddtocart }}>
        {children}
    </GlobalData.Provider>
}

export default DataProvider;