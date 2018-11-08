import React, { Fragment } from 'react';
import { connect } from '@dashbling/client/dashbling';
import { Dashboard as DashblingDashboard } from '@dashbling/client/components';
import RoundWidget from './widgets/roundWidget';
import dashboardLayout from './styles/customDashboardLayout.scss';

// RoundWidget + time event = ClockWidget
const ClockWidget = connect("time")(RoundWidget);

// RoundWidget + change event = BitcoinWidget
const BitcoinWidget = connect("change")(RoundWidget);

export default class Dashboard extends React.Component {

  render() {
    return (
      <Fragment>
        <DashblingDashboard layout={dashboardLayout}> 
          <ClockWidget title="What time is it ?" />
          <BitcoinWidget title="How much is Bitcoin ?"/>
        </DashblingDashboard>
      </Fragment>
    );
  }
  
}
