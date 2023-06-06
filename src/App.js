import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './auth/LoginScreen';
import { auth } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/slice/userSlice';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //Logged Out
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          {
            !user ? (<LoginScreen />) : (
              <Routes>
                <Route exact path='/' element={<HomeScreen />} />
                <Route path='/profile' element={<ProfileScreen />} />
              </Routes>
            )
          }
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
