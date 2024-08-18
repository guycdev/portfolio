import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const ClientContext = createContext<{ isMobileClient: boolean }>({
  isMobileClient: false,
});

const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileClient, setIsMobileClient] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileClient(window.innerWidth < 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ClientContext.Provider value={{ isMobileClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;

export const useClientContext = () => useContext(ClientContext);
