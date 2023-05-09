const logout = (): void => {
  const APP_NAME = import.meta.env.VITE_APP_NAME;
  localStorage.removeItem(`${APP_NAME}_token`);
  localStorage.removeItem(`${APP_NAME}_username`);
  localStorage.removeItem(`${APP_NAME}_person`);
  window.location.reload();
};

export default logout;
