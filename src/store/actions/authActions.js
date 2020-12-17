import * as actionTypes from "../actionTypes";
import axios from "axios";
import Cookie from "js-cookie";

export const loginStart = () => {
  return {
    type: actionTypes.AUTH_LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    payload: error,
  };
};

export const logout = () => {
  Cookie.remove("userInfo");
  Cookie.remove("expirationDate");
  Cookie.remove("userToken");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const passwordChangeStart = () => {
  return {
    type: actionTypes.PASSWORD_CHANGE_REQUEST,
  };
};

export const passwordChangeSuccess = (message) => {
  return {
    type: actionTypes.PASSWORD_CHANGE_SUCCESS,
    payload: message,
  };
};

export const passwordChangeFail = (error) => {
  return {
    type: actionTypes.PASSWORD_CHANGE_FAIL,
    payload: error,
  };
};

const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStart());
    await axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const data = res.data;
        const expirationDate = new Date(
          new Date().getTime() + data.data.expires_in * 1000
        );
        Cookie.set("userInfo", JSON.stringify(data.data.user));
        Cookie.set("userToken", JSON.stringify(data.data.access_token));
        Cookie.set("expirationDate", JSON.stringify(expirationDate));
        dispatch(loginSuccess(data));
        // dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFail(err.response.data));
      });
  };
};

// export const authSignup = (email, full_name, username, password, password2) => {
//   return (dispatch) => {
//     dispatch(authStart());
//     axios
//       .post("http://localhost:5000/api/accounts/register", {
//         email: email,
//         password: password,
//         password2: password2,
//         full_name: full_name,
//         username: username,
//       })
//       .then((res) => {
//         const token = res.data.token;
//         const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//         localStorage.setItem("token", token);
//         localStorage.setItem("expirationDate", expirationDate);
//         dispatch(authSuccess(token));
//         dispatch(checkAuthTimeout(3600));
//       })
//       .catch((err) => {
//         dispatch(authFail(err.response.data));
//       });
//   };
// };

export const authChangePassword = (
  old_password,
  new_password,
  password_confirmation,
  token,
  successCallback
) => {
  return async (dispatch) => {
    dispatch(passwordChangeStart());
    await axios
      .post(
        "http://127.0.0.1:8000/api/auth/reset-password",
        {
          old_password: old_password,
          new_password: new_password,
          password_confirmation: password_confirmation,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(logout());
        const data = res.data;
        dispatch(passwordChangeSuccess(data));
      })
      .then(() => {
        successCallback();
      })
      .catch((err) => {
        dispatch(passwordChangeFail(err.response.data));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(loginSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
