import { ReactNode, createContext } from "react";
import StoreService, { IStoreService } from "../services/StoreService";

interface IProps {
    children: ReactNode,
}

interface IContext extends IStoreService {
}

export const AuthContext = createContext<IContext>({
    ...StoreService
});

export default function AuthProvider(props: IProps) {
    return (
        <AuthContext.Provider value={{
            ...StoreService
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}