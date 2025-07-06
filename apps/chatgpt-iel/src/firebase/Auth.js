import React, { useEffect, useState, useContext, createContext } from "react";
import firebase from "firebase/compat/app";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase-config";
import Loading from "./Loading";
import { useLocation, Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { ACCESS_STATUS, PROTECTED_PATHS, BOOKID } from "./access";

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

// 1. Create an Auth Context to hold the user state
const AuthContext = createContext(undefined);

// 2. Create a Provider component that will wrap your entire app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);
  const location = useLocation();
  const nologinUrl = useBaseUrl('/nologin');
  const nologinContentUrl = useBaseUrl('/nologincontent');

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        try {
          const idTokenResult = await currentUser.getIdTokenResult();
          // Processa os books dos custom claims
          const userBooks = idTokenResult.claims.books;
          if (userBooks && Object.keys(userBooks).length > 0) {
            // Convert string values to Date objects
            const convertedBooks = {};
            Object.entries(userBooks).forEach(([bookId, dateString]) => {
              if (typeof dateString === "string" && dateString.length === 7) {
                // Add "2" prefix to make year 4 digits: '0250801' -> '20250801'
                const fullDateString = "2" + dateString;
                // Parse: year (4 chars), month (2 chars), day (2 chars)
                const year = parseInt(fullDateString.substring(0, 4), 10);
                const month = parseInt(fullDateString.substring(4, 6), 10) - 1; // Month is 0-indexed
                const day = parseInt(fullDateString.substring(6, 8), 10);
                convertedBooks[bookId] = new Date(year, month, day);
              }
            });
            setBooks(convertedBooks);
          } else {
            setBooks(null);
          }
        } catch (error) {
          console.error("Error fetching user claims:", error);
          setBooks(null);
        }
      } else {
        setBooks(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only once

  // Funções para consultar books
  function hasAccess(bookId) {
    if (!books || !books[bookId]) {
      return ACCESS_STATUS.FORBIDDEN;
    }

    // AINDA NÃO ESTÁ CONSIDERANDO O CASO DE EXPIRAÇÃO
    // Create a new Date object to avoid mutating the state
    // const expiryDate = new Date(books[bookId]);
    // expiryDate.setHours(23, 59, 59, 999); // Check against the end of the expiry day

    // if (expiryDate < new Date()) {
    //   return ACCESS_STATUS.EXPIRED;
    // }

    return ACCESS_STATUS.GRANTED;
  }

  const value = { user, loading, auth, signOut, hasAccess };

  // Show a loading screen while Firebase is checking the auth state
  if (loading) {
    return <Loading />;
  }

  //Verifica se usuário pode acessar este conteúdo
  const currentPath = location.pathname;
  //console.log("Current Path:", currentPath);
  //primeiro verifica se este conteúdo tem alguma rota protegida
  const isProtected = PROTECTED_PATHS.some((path) => currentPath.includes(path));
  if (isProtected) {
      if (!user) {
        return <Redirect to={`${nologinUrl}?from=${encodeURIComponent(currentPath)}`} />;
      }
      else if (hasAccess(BOOKID) === ACCESS_STATUS.FORBIDDEN) {
        return <Redirect to={`${nologinContentUrl}?from=${encodeURIComponent(currentPath)}`} />;
      }
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

  /* Código antigo com o controle de rotas, login e logout
  const location = useLocation();
  let from = location.pathname;

  if (user?.email) {
    if (from === LOGOUT_PATH) {
      signOut(auth);
      return <Redirect to={BASE} from={LOGOUT_PATH} />;
    } else if (from === LOGIN_PATH) return <Redirect to={BASE} from={from} />;

    return children;
  } else {
    if (from === LOGOUT_PATH) return <Redirect to={BASE} from={from} />;
    else if (PROTECTED_PATHS.filter((x) => from.includes(x)).length)
      return <Login />;
    else if (from === LOGIN_PATH) return <Login />;
    return children;
  }
  */
}

// 3. Create a custom hook to easily consume the auth state
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};