import { createContext, useContext, useState } from "react";
import { UserType } from "../../modules/login/types/userType";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    message: string;
    type: NotificationType;
    description?: string;
}

interface GlobalData {
    notification?: NotificationProps;
    user?: UserType;
}

interface GlobalContextProps {
    globalData: GlobalData;
    setGlobalData: (globalData: GlobalData) => void;
}

const GLobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
    children: React.ReactNode;  
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({});

    return (
        <GLobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GLobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GLobalContext);

    const setNotification = (message: string, type: NotificationType, description?: string) => {
        setGlobalData({
            ...globalData,
            notification : {
                message,
                type,
                description,
            }
        });
    }

    const setUser = (user: UserType) => {
        setGlobalData({
            ...globalData,
            user,
        })
    }

    return {
        notification: globalData?.notification,
        setNotification,
        user: globalData?.user,
        setUser,
    }
}