import React from 'react';
import { compose, pure } from 'recompose';
import Link from 'next/link';
import { Pie } from 'react-chartjs-2';
import Markdown from 'react-remarkable';
import variables from '../styles/variables';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import withCurrentUser from '../lib/hoc/withCurrentUser';
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

const Fundraiser = ({ fundraiser, currentUser }) => (
  <PageLayout title={fundraiser.meta_title} metaDescription={fundraiser.meta_description}>

    <div className="wrap wrap--narrow mt7">
      <section id="fundraiser" className="section">
        <h2>{fundraiser.title}</h2>
        <Markdown source={fundraiser.intro} />
      </section>
    </div>
    <div className="c-bg-primary mv1">
      <div className="wrap wrap--narrow">
        <div className="button-group">
          <a className="button" href="https://gitprint.com/unchainedshop/unchained-evolution/blob/master/business-plan.md?download">
                Read our Business Plan
          </a>
        </div>
      </div>
    </div>

    <div className="wrap wrap--narrow mb7">
      <section className="section">
        <div className="text-center mv4">
          <p>The pre-sale starts 2nd of April</p>
          {currentUser._id ? (
            <Link href="/profile">
              <a className="button">
                Check your whitelisting status
              </a>
            </Link>
          ) : (
            <Link href="/signup?redirect=/fundraiser">
              <a className="button hero-button">
              Join the queue
              </a>
            </Link>
          )}
        </div>

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
            <p>Unchained participation tokens account for a total of 55% of stock equity</p>
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
          </div>
        </div>
      </section>
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: fundraiser.content,
      }}
      />
    </div>
    <style jsx>{`
      .charts {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .chart {
        margin-top: 1.5em;
        text-align: center;
        min-width: 30vw;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withCurrentUser,
  withRegion('fundraiser'),
  pure,
)(Fundraiser));
