import React, {FC, ReactNode} from 'react';
import {QueryClient,QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false,
        }
    }
})



const MainProviders:FC<{children:ReactNode}> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default MainProviders;