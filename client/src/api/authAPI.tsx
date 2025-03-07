import { UserLogin } from "../interfaces/UserLogin";

const Login = async (userInfo: UserLogin) => {  
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "username": "application/json",
      "password": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(userInfo),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  return data;
}

export default { Login };
