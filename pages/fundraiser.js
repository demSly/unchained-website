import React from 'react';
import { compose, pure } from 'recompose';
import { Pie } from 'react-chartjs';
import variables from '../styles/variables';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const pieOptions = {
  segmentShowStroke: true,
  // String - The colour of each segment stroke
  segmentStrokeColor: '#fff',
  // Number - The width of each segment stroke
  segmentStrokeWidth: 2,
  // Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 50, // This is 0 for Pie charts
  // Number - Amount of animation steps
  animationSteps: 100,
  // String - Animation easing effect
  animationEasing: 'easeOutBounce',
  // Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,
  // Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,
};

const Fundraiser = ({ fundraiser }) => (
  <PageLayout title={fundraiser.meta_title} metaDescription={fundraiser.meta_description}>

    <div className="wrap wrap--narrow mt3">
      <section id="fundraiser" className="section">
        <h2>{fundraiser.title}</h2>
      </section>
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: fundraiser.content,
      }}
      />
    </div>
    <div className="charts">
      <div className="chart">
        <h1>Distribution</h1>
        <Pie
          data={[
            {
              value: 15,
              color: variables.grayColor,
              label: 'Open Source Bounties',
            },
            {
              value: 10,
              color: variables.darkGrayColor,
              label: 'Company Reserve',
            },
            {
              value: 15,
              color: variables.darkColor,
              label: 'Team & Advisors',
            },
            {
              value: 60,
              color: variables.primaryColor,
              label: 'Sale',
            },
          ]}
          options={pieOptions}
        />
      </div>
      <div className="chart">
        <h1>Allocation</h1>
        <Pie
          data={[
            {
              value: 20,
              color: '#9296F2',
              label: 'Social Media & PR',
            },
            {
              value: 50,
              color: variables.primaryColor,
              label: 'Engineering',
            },
            {
              value: 10,
              color: '#A0E2AD',
              label: 'Business Administration',
            },
            {
              value: 20,
              color: variables.secondaryColor,
              label: 'Sales & Events',
            },
          ]}
          options={pieOptions}
        />
      </div>
    </div>
    <style jsx>{`
      .charts {
        display: flex;
        justify-content: space-evenly;
      }
      .chart {
        text-align: center;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('fundraiser'),
  pure,
)(Fundraiser));
