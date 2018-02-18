import React from 'react';
import { compose, pure } from 'recompose';
import Link from 'next/link';
import { Pie } from 'react-chartjs-2';
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

    <div className="wrap wrap--narrow mv7">
      <section id="fundraiser" className="section">
        <h2>{fundraiser.title}</h2>
        <h3>We don{"'"}t play the Crypto Game</h3>
        <p>
          Read the whitepaper to find out why we don{'`'}t tell you that we are powered
          by an alien force of 20 blockchain engineers and 10
          industry leading advisors that can{"'"}t spell {"'"}byzantine{"'"}. We don{'"'}t build a {'"'}
          decentralized-industry-revolutionizing-artificial-intelligence-smart-contract{'"'} either
          and we don{'`'}t like Reddit and Discours. We don{'`'}t translate our white paper to Korean
          and we don{'`'}t hire support teams and community managers to hype the token.
        </p>
        <p>
          <strong>
            Instead, this is just a crowdfunding for our B2B business and
            we are very serious about it
          </strong>
        </p>
        <div className="c-bg-primary mv4">
          <div className="wrap wrap--narrow mv1">
            <div className="button-group">
              <a className="button" href="https://gitprint.com/unchainedshop/unchained-evolution/blob/master/business-plan.md?download">
                  Read our Business Plan
              </a>
              <span className="c-white">or</span>
              <a className="button" href="https://gitprint.com/unchainedshop/unchained-evolution/blob/master/whitepaper.md?download">
                  Download the Whitepaper
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mv4">
          <p>The pre-sale has started!</p>
          {currentUser._id ? (
            <Link href="/profile">
              <a className="button">
                Check your whitelisting status
              </a>
            </Link>
          ) : (
            <Link href="/signup?redirect=/fundraiser">
              <a className="button hero-button">
              Join the pre-sale (whitelisting)
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
