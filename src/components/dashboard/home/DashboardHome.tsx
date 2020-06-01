import React from "react";
import "./DashboardHome.scss";

export interface DashboardHomeProps {
  summaryItems: SummaryItem[];
  notifications: Notification[];
  currentCohort: {
    name: string;
    updates: Update[];
  };
  onSummaryItemClicked: (id: string) => void;
}

interface SummaryItem {
  title: string;
  count: number;
  icon: string; // FontAwesome icon string (pro icons available)
  url: string;
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
      <div
        className="uk-flex uk-flex-around uk-flex-between@s uk-flex-middle summary-item uk-padding-small"
        onClick={() => props.onSummaryItemClicked(item.url)}>
        <div>
          <div className="summary-item-title light-gray">{item.title}</div>
          <div className="summary-item-count dark-gray">{item.count}</div>
        </div>
        <div>
          <i className={`${item.icon} primary fa-3x`}></i>
        </div>
      </div>
    </div>
  ));

  const notifications = props.notifications.map((notification) => (
    <div key={notification.id} className="uk-margin">
      <div className="notification-title black">{notification.title}</div>
      <div className="notification-content">{notification.content}</div>
    </div>
  ));

  const updates = props.currentCohort.updates.map((update) => (
    <div key={update.id} className="uk-margin">
      <div className="cohort-title black">{update.title}</div>
      <div className="cohort-content">{update.content}</div>
    </div>
  ));

  return (
    <div id="dashboard-home">
      <h1>Dashboard</h1>
      <div className="uk-grid-row-small uk-grid-column-large uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-large-top summary" data-uk-grid>
        {summaryItems}
      </div>
      <div className="uk-grid-large uk-margin-large-top" data-uk-grid>
        <div className="uk-width-1-3@s notifications">
          <div className="notification-header dark-gray uk-margin-bottom">Notifications</div>
          {notifications}
        </div>
        <div className="uk-width-2-3@s cohort">
          <div className="cohort-header dark-gray uk-margin-bottom">{props.currentCohort.name}</div>
          {updates}
        </div>
      </div>
    </div>
  );
};


export default DashboardHome;
