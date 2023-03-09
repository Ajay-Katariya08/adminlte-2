 
 const Logout = () => {
  
  window.localStorage.removeItem('id');
  window.location.href = '/';
}
export default Logout;