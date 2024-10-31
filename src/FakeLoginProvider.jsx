import { createContext, useState } from "react";

// Skapa ett kontext med standardvärden för FakeLoginContext
export const FakeLoginContext = createContext({
  isLoggedIn: false,
  loading: false,
  error: null,
  login: () => {},
  logout: () => {},
});

// Skapa och exportera FakeLoginProvider som håller logik för inloggning och utloggning
export const FakeLoginProvider = ({ children }) => {
  // Tillstånd som håller reda på om användaren är inloggad
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Fake CSRF-token, hårdkodad för testsituation
  const fakeCsrfToken = "fake-csrf-token-12345";

  // Inloggningsfunktion som sätter CSRF-token och uppdaterar inloggningsstatus
  const login = (username, password) => {
    console.log(
      `Successful Login attempted with username: ${username} and password: ${password}`
    );
    sessionStorage.setItem("csrfToken", fakeCsrfToken); // Spara token i sessionStorage
    setIsLoggedIn(true); // Uppdatera status till inloggad
  };

  // Utloggningsfunktion som tar bort CSRF-token och uppdaterar inloggningsstatus
  const logout = () => {
    console.log("Successful Logout attempted");
    sessionStorage.removeItem("csrfToken"); // Ta bort token från sessionStorage
    setIsLoggedIn(false); // Uppdatera status till utloggad
  };

  // Funktion för att simulera ett säkert API-anrop
  const secureCall = async (apiUrl, path, options = {}) => {
    console.log(`Faking call to ${apiUrl}${path}`);
    const csrfToken = sessionStorage.getItem("csrfToken"); // Hämta token från sessionStorage
    return { status: "success", csrfToken: csrfToken }; // Returnera token och status
  };

  // Kontextvärden som görs tillgängliga för komponenter som använder FakeLoginContext
  const contextValue = {
    isLoggedIn: isLoggedIn,
    loading: false,
    error: null,
    login: login,
    logout: logout,
    secureCall: secureCall,
  };

  // Returnera Provider-komponenten som omsluter barnkomponenter
  return (
    <FakeLoginContext.Provider value={contextValue}>
      {children}
    </FakeLoginContext.Provider>
  );
};

export default FakeLoginProvider;
