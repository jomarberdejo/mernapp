export const useGetUserInfo = () => {
  const user = localStorage.getItem('userInfo');
  const {userId, userName} = JSON.parse(user) || {};
  
  return {userId, userName}
}

