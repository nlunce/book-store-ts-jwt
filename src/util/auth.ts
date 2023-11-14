import { redirect } from "react-router-dom";
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");

  if (!storedExpirationDate) {
    // Handle the case where the expiration date is not available
    return null; // or any other default value that makes sense in your context
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration! < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}
