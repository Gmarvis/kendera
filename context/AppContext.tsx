import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface DataType {
  allPrograms: Program[];
  setAllProgram: Dispatch<SetStateAction<Program[]>>;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const initialData: DataType = {
  allPrograms: [],
  user: {
    name: "",
    email: "",
    password: "",
  },
  setAllProgram: () => [],
  setUser: () => {},
};

const AppContext = createContext(initialData);

export const AppContexProvider = ({ children }: any) => {
  const [allPrograms, setAllProgram] = useState<Program[]>([]);
  const [user, setUser] = useState<User>(initialData.user);

  const values = {
    allPrograms,
    setAllProgram,
    user,
    setUser,
  };

  useEffect(() => {
    const getPrograms = async () => {
      const data = await AsyncStorage.getItem("programData");
      if (data) setAllProgram(JSON.parse(data));
    };
    getPrograms();
  }, []);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
