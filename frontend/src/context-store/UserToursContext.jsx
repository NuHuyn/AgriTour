import { createContext, useContext, useState } from "react";

const UserToursContext = createContext();

export const UserToursProvider = ({ children }) => {
  const [tours, setTours] = useState({
    upcoming: [],
    ongoing: [],
    completed: [],
    cancelled: []
  });

  const addUpcomingTour = (tourData) => {
    setTours((prev) => ({
      ...prev,
      upcoming: [...prev.upcoming, tourData]
    }));
  };

  return (
    <UserToursContext.Provider value={{ tours, addUpcomingTour }}>
      {children}
    </UserToursContext.Provider>
  );
};

export const useUserTours = () => useContext(UserToursContext);
