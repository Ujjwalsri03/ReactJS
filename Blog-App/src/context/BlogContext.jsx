import { createContext, useState} from "react";

export const BlogContext  = createContext();

const BlogContextProvider =  (props) =>{
    return (
        const [state, setState] = useState({

        });
        <>
            <BlogContext.Provider value={}>
                {props.children}
            </BlogContext.Provider>
        </>
    );
}