import React, { useContext } from "react";
import { FakeLoginContext } from "./FakeLoginProvider";
import ThreadList from "./components/ThreadManagement/ThreadList";
import UserManagement from "./components/UserManagement";
import ReportManagement from "./components/ReportManagement";
import Login from "./Login";

//Fejk dashboard med trådhantering, användarhantering , rapporthantering efter att användare har loggat in
const Dashboard = () => {
  const { isLoggedIn, logout } = useContext(FakeLoginContext);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <div>
          <header className="bg-blue-500 text-white p-4 flex justify-between">
            <h1 className="text-2xl">Välkommen!</h1>
            <button onClick={logout} className="btn btn-error">
              Logga ut
            </button>
          </header>
          <main className="p-6">
            <section className="mb-8">
              <ThreadList />
            </section>
            <section className="mb-8">
              <UserManagement />
            </section>
            <section className="mb-8">
              <ReportManagement />
            </section>
          </main>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Dashboard;
