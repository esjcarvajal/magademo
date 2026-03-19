import { createContext, useContext, useState, ReactNode } from "react";

interface StudentAuthContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
}

const StudentAuthContext = createContext<StudentAuthContextType | null>(null);

const CORRECT_PASSWORD = "FOUC2026";

export const StudentAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <StudentAuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </StudentAuthContext.Provider>
  );
};

export const useStudentAuth = () => {
  const context = useContext(StudentAuthContext);
  if (!context) {
    throw new Error("useStudentAuth must be used within StudentAuthProvider");
  }
  return context;
};
