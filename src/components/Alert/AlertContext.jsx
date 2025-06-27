import React, { createContext, useContext, useState, useCallback } from "react";
import styles from "./Alert.module.scss"; 

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback((message, type = "info", duration = 3000) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, duration);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <Alert message={alert.message} type={alert.type} />}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);

const Alert = ({ message, type }) => {
  const getAlertClass = () => {
    switch (type) {
      case "success": return styles.success;
      case "error": return styles.error;
      case "warning": return styles.warning;
      case "info":
      default: return styles.info;
    }
  };

  return (
    <div className={`${styles.alert} ${getAlertClass()}`}>
      {message}
    </div>
  );
};