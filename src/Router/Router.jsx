import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from '../App.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import LoginScreen from '../screens/core/LoginScreen/LoginScreen.jsx';
import RegisterScreen from '../screens/core/RegisterScreen/RegisterScreen.jsx';
import OtpScreen from '../screens/core/OtpScreen/OtpScreen.jsx';
import ProfileScreen from '../screens/core/ProfileScreen/ProfileScreen.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AdminRoute from './AdminRoute/AdminRoute.jsx';
import DashboardScreen from '../screens/admin/Dashboard/DashboardScreen.jsx';
// import DashboardRoute from './auth/DashboardRoute.jsx';
import PendingScreen from '../screens/core/PendingScreen/PendingScreen.jsx';
import AdminControlScreen from '../screens/admin/AdminControlScreen/AdminControlScreen.jsx';
import PasswordResetScreen from '../screens/core/PasswordResetScreen/PasswordResetScreen.jsx';
import ForgotPassword from '../screens/core/ForgotPasswordScreen/ForgotPasswordScreen.jsx';
import Boiler from '../screens/associate/Boiler.jsx';
import BoilerData from '../screens/admin/BoilerData/BoilerData.jsx';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route
          path='/password-reset/:userId/:token'
          element={<PasswordResetScreen />}
        />
        <Route path='/otp' element={<OtpScreen />} />
        <Route path='/forget-password' element={<ForgotPassword />} />

        <Route path='' element={<PrivateRoute />}>
          <Route path='/pending' element={<PendingScreen />} />
          <Route path='/:companyId/boiler' element={<Boiler />} />

          <Route path='/:companyId/dashboard' element={<DashboardScreen />} />

          <Route path='/profile' element={<ProfileScreen />} />
        </Route>
        <Route path='' element={<AdminRoute />}>
          <Route path='/company/:companyId' element={<AdminControlScreen />} />
          <Route path='/boiler/data' element={<BoilerData />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
