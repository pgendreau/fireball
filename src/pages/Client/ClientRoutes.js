import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

import Helmet from 'react-helmet';

import PageNav from 'components/PageNav/PageNav';
import { BaazarIcon, GameControllerIcon } from 'components/Icons/Icons';
import { ClientContext } from 'contexts/ClientContext';
import { LoginContext } from 'contexts/LoginContext';
import ethersApi from 'api/ethers.api';
import commonUtils from 'utils/commonUtils';

import ClientAccount from './routes/ClientAccount';
import ClientGotchis from './routes/ClientGotchis';
import ClientLendings from './routes/ClientLendings';
import ClientWarehouse from './routes/ClientWarehouse';
import ClientTickets from './routes/ClientTickets';
import ClientRealm from './routes/ClientRealm';

import styles from './styles';
import { useLocation } from 'react-router-dom';

export default function ClientRoutes() {
    const classes = styles();
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const subroute = location.pathname.split('/')[3];

    const { account } = useParams();

    const { activeAddress, setActiveAddress } = useContext(LoginContext);
    const { getClientData, navData } = useContext(ClientContext);

    useEffect(() => {
        if (ethersApi.isEthAddress(account)) {
            setActiveAddress(account);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (activeAddress) {
            history.push({
                pathname: `/client/${activeAddress}${subroute ? `/${subroute}` : ''}`
            });
            getClientData(activeAddress);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeAddress]);

    return (
        <div className={classes.routes}>

            <Helmet>
                <title>
                    { account ?
                        `${commonUtils.cutAddress(account, '..')} ${subroute ? subroute : 'client'}`
                        : 'client'}
                </title>
            </Helmet>

            { ethersApi.isEthAddress(account) && (
                <div className={classes.routesNav}>
                    <PageNav
                        links={navData}
                        beforeContent={(
                            <Button
                                to={`/client/${account}`}
                                className={classes.customBtn}
                                component={NavLink}
                                activeClassName='active'
                                exact
                            >
                                <GameControllerIcon width={24} height={24} />
                            </Button>
                        )}
                        afterContent={(
                            <Button
                                href={`/shop?address=${account}`}
                                target='_blank'
                                className={classes.customBtn}
                            >
                                <BaazarIcon width={24} height={24} />
                            </Button>
                        )}
                    ></PageNav>
                </div>
            )}

            <Switch>
                <Route exact path={`${match.path}/`} component={ ClientAccount } />
                <Route path={`${match.path}/gotchis`} component={ ClientGotchis } />
                <Route path={`${match.path}/lendings`} component={ ClientLendings } />
                <Route path={`${match.path}/warehouse`} component={ ClientWarehouse } />
                <Route path={`${match.path}/tickets`} component={ ClientTickets } />
                <Route path={`${match.path}/realm`} component={ ClientRealm } />
                {/* <Redirect from='*' to={`${match.path}`} /> */}
                {/* <Redirect from={match.path} to={`${match.path}/gotchis`} /> */}
            </Switch>
        </div>
    );
}
