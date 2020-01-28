import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import Events from '../events';
import Clubs from '../clubs';
import Sponsors from '../sponsors';
import Emails from '../emails';
import AddEvent from '../events/add-event/';
import EditProfile from '../edit-profile';


export default class ClubView extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={`/`} component={Dashboard} />
                <Route path={`/events/club`} component={Events} />
                <Route path={`/events/add`} component={AddEvent} />
                <Route path={`/events/all`} component={Events} />
                <Route path={`/clubs`} component={Clubs} />
                <Route path={`/sponsors`} component={Sponsors} />
                <Route path={`/emails`} component={Emails} />
                <Route path={`/edit-profile`} component={EditProfile} />
            </Switch>
        )
    }

}
