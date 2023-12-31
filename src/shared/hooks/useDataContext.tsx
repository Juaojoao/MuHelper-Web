import { createContext, useContext, useState } from 'react';
import { Guides } from '../../modules/dashboard/types/guidesType';

interface DataContext {
  guides?: Guides[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({});

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setGuides = (guides: Guides[]) => {
    setData({
      ...data,
      guides,
    });
  };

  return {
    guides: data?.guides || [],
    setGuides,
  };
};
