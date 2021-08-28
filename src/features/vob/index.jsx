import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/notFound';
import VobDetailPage from './pages/vobDetailPage';
import VobListPage from './pages/vobListPage';

VobFeature.propTypes = {};

function VobFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={VobListPage} exact />
        <Route path={`${match.path}/:vobId`} component={VobDetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default VobFeature;
