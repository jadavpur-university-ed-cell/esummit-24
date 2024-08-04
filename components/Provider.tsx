"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ProviderProps extends React.PropsWithChildren {
    session: Session | null
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}
 
export default Provider;