import React from "react";
import "./DashboardHome.scss";

export interface DashboardHomeProps {
  summaryItems: SummaryItem[];
  notifications: Notification[];
  currentCohort: {
    name: string;
    updates: Update[];
  };
}

interface SummaryItem {
  title: string;
  count: number;
  icon: string; // FontAwesome icon string (pro icons available)
}

interface Notification {
  id: number;
  title: string;
  content: string; // TODO: make jsx/html?
}

interface Update {
  id: number;
  title: string;
  content: string; // TODO: make jsx/html?
}

const DashboardHome: React.FC<DashboardHomeProps> = (props) => {
  const summaryItems = props.summaryItems.map((item) => (
    <div key={item.title}>
      <p>{item.title}</p>
      <p>{item.count}</p>
    </div>
  ));

  const notifications = props.notifications.map((notification) => (
    <div key={notification.id}>
      <p>{notification.title}</p>
      <p>{notification.content}</p>
    </div>
  ));

  const updates = props.currentCohort.updates.map((update) => (
    <div key={update.id}>
      <p>{update.title}</p>
      <p>{update.content}</p>
    </div>
  ));

  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      <div className="uk-grid-small uk-grid-medium@s uk-child-width-1-2 uk-child-width-1-4@s uk-margin-large-top sumamry" data-uk-grid>
        {summaryItems}
      </div>
      <div className="uk-grid-large uk-margin-large-top" data-uk-grid>
        <div className="uk-width-1-3@s">
          <h2>Notifications</h2>
          {notifications}
        </div>
        <div className="uk-width-2-3@s">
          <h2>{props.currentCohort.name}</h2>
          {updates}
        </div>
      </div>
    </div>
  );
};


export default DashboardHome;
