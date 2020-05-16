export const AuthService = {
  login(email, password, authenticationCode) {
    if (
      email === "santoshd@wesecureapp.com" &&
      password === "123456" &&
      authenticationCode === "1234"
    ) {
      return { success: true, message: "successfully", subtitle: "logged in" };
    } else {
      return {
        success: false,
        message: "Logged In failed.",
        subtitle: "Incorrect Code",
      };
    }
  },
};
