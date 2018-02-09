import React from 'react';
import { compose, pure } from 'recompose';
import { Pie } from 'react-chartjs-2';
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
  legend: {
    display: false,
  },
};

const Fundraiser = ({ fundraiser }) => (
  <PageLayout title={fundraiser.meta_title} metaDescription={fundraiser.meta_description}>

    <div className="wrap wrap--narrow mt3">
      <section id="fundraiser" className="section">
        <h2>{fundraiser.title}</h2>

        <p>Whitelisting has started, please read below details carefully first</p>

        <button className="button">
          Get whitelisted for the pre-sale event
        </button>

        <div className="charts">
          <div className="chart">
            <h3>Distribution</h3>
            <Pie
              data={{
                labels: [
                    'Open Source Bounties',
                    'Company Reserve',
                    'Team & Advisors',
                    'Sale',
                ],
                datasets: [{
                  data: [15, 10, 15, 60],
                  backgroundColor: [
                    variables.grayColor,
                    variables.darkGrayColor,
                    variables.darkColor,
                    variables.primaryColor,
                  ],
                }],
              }}
              options={pieOptions}
            />
            Tokens account for a total of 55% of stock equity
          </div>
          <div className="chart">
            <h3>Allocation</h3>
            <Pie
              data={{
                  labels: [
                      'Social Media & PR',
                      'Engineering',
                      'Business Administration',
                      'Sales & Events',
                  ],
                  datasets: [{
                    data: [20, 50, 10, 20],
                    backgroundColor: [
                      variables.darkGrayColor,
                      variables.secondaryColor,
                      variables.darkColor,
                      variables.grayColor,
                    ],
                  }],
                }}
              options={pieOptions}
            />
            Invested money will burn over 4 years
          </div>
        </div>
        <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: fundraiser.content,
        }}
        />
      </section>
    </div>
    <style jsx>{`
      .charts {
        display: flex;
        justify-content: space-evenly;
      }
      .chart {
        text-align: center;
        min-height: 40vh;
        width: 100%;
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
