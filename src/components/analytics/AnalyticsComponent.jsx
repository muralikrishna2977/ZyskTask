import React from 'react';
import './AnalyticsComponent.scss';
import CardForAnalytics from './CardForAnalytics';

const analyticsTextArray = [
  {
    header: 'Share team inboxes',
    content: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    iconPath: `${import.meta.env.BASE_URL}assets/shareTeam.svg`,
  },
  {
    header: 'Deliver instant answers',
    content: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    iconPath: `${import.meta.env.BASE_URL}assets/deliverInstant.svg`,
  },
  {
    header: 'Manage your team with reports',
    content: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    iconPath: `${import.meta.env.BASE_URL}assets/manageTeam.svg`,
  },
  {
    header: 'Connect with customers',
    content: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    iconPath: `${import.meta.env.BASE_URL}assets/connectCustomers.svg`,
  },
  {
    header: 'Connect the tools you already use',
    content: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    iconPath: `${import.meta.env.BASE_URL}assets/connectTools.svg`,
  },
  {
    header: 'Our people make the difference',
    content: 'Were an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    iconPath: `${import.meta.env.BASE_URL}assets/ourPeople.svg`,
  },
];


function AnalyticsComponent() {
  return (
    <div className='analytics_component'>
      <div className='text_container'>
        <h4 className='header_4'>Features</h4>
        <h1 className='header_1'>Analytics that feels like it's from the future</h1>
        <p className='content_p'>Powerful, self-serve product and growth analytics to help you convert, engage and retain more users. Trusted by over 4000 startups.</p>
      </div>
      <div className='cards_container'>
        {analyticsTextArray.map((obj) => 
          <CardForAnalytics
            header={obj.header}
            content={obj.content}
            iconPath={obj.iconPath}
          />
        )}
      </div>
    </div>
  );
}

export default AnalyticsComponent;