import React, { useEffect } from 'react';
import {
  Switch, Route, useHistory,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AuthPage from '../AuthPage/AuthPage';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import { handleLogin, handleLogout } from '../../redux/actions';

function App() {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn;
  })

  const user = useSelector(state => {
    return state.auth.user;
  })

  const history = useHistory();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      dispatch(handleLogin(user))
    } else {
      dispatch(handleLogout())
      localStorage.removeItem('user');
    }
  }, [history, isLoggedIn, dispatch, user]);

  return (
    <div className="app">
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          isLoggedIn={isLoggedIn}
        >
          <Header />
          <MainPage />
        </ProtectedRoute>
        <Route
          exact
          path="/signin"
        >
          {
            isLoggedIn ?
              <Redirect
                to="/"
              /> :
              <AuthPage />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
