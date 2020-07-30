import React, {Suspense, Fragment} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch, RouteProps} from 'react-router-dom';
import {history} from '../redux/store';
import Fallback from '../components/common/fallback';
import {IRootReducer} from '../redux/reducers/state';
import {IAuth} from '../types/auth';
import 'antd/dist/antd.css';
import Home from '../pages/home';
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";

// const HomePage = React.lazy(() => import('../pages/home'));
// const LoginPage = React.lazy(() => import('../pages/auth/login'));
// const SignUpPage = React.lazy(() => import('../pages/auth/signup'));

interface IMainRouterProps extends RouteProps {
  auth: IAuth,
}

function MainRouter(props: IMainRouterProps) {
  const {auth} = props
  return (
    <Router history={history}>
      <Suspense fallback={<Fallback/>}>
        <Switch>
          {
            auth
              ? (
                <Route exact path="/" component={Home}/>
              )
              : (
                <Fragment>
                  <Route exact path="/" component={LoginPage}/>
                  <Route exact path="/signup" component={SignupPage}/>
                </Fragment>
              )
          }
        </Switch>
      </Suspense>
    </Router>
  );
}

const mapStateToProps = (state: IRootReducer): IMainRouterProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);


