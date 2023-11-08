export const isLoggedIn = () => {
    console.log("user is login");
    return !!sessionStorage.getItem('isLoggedIn');
   
  };
  
  export const login = () => {
    sessionStorage.setItem('isLoggedIn', true);
  };
  
  export const logout = () => {
    sessionStorage.removeItem('isLoggedIn');
  };
  
  const AuthService = {
    login,
    isLoggedIn,
    logout
  };





  
  export default AuthService;
  
  