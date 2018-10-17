import React from 'react';
import { compose, pure } from 'recompose';
import Markdown from 'react-remarkable';
import variables from '../styles/variables';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import withQuestions from '../lib/withQuestions';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Support = ({ faq, questions }) => (
  <PageLayout title={faq.meta_title} metaDescription={faq.meta_description}>

    <div className="wrap mv7">
      <section id="faq" className="section">
        <div className="flex-between nowrap">
          <img className="undraw" src="../static/img/undraw_questions_75e0.svg" alt="question" />
          <div>
            <h2>
              {faq.faq_title}
            </h2>
            <div className="dangerously mb4" dangerouslySetInnerHTML={{ // eslint-disable-line
              __html: faq.faq_content,
            }}
            />
          </div>
        </div>

        {questions.map(({ question, answer }) => (
          <React.Fragment key={question}>
            <div className="faq-item">
              <div className="question">
                {question}
              </div>
              <p className="answer">
                <Markdown source={answer} />
              </p>
            </div>
          </React.Fragment>
        ))}
      </section>

    </div>


    <style jsx>
      {`
      .faq-item {
        margin-top: 2em;
        border-top: 2px dashed ${variables.lineGrayColor};
      }
      .question {
        padding-top: 2em;
        font-weight: 500;
      }
      .answer {
        padding-bottom: 1.5em;
      }
      @media (min-width: 1140px) {
        .faq-item {
          display: flex;
          justify-content: space-between;
        }
        .question {
          margin-right: 2em;
          width: 30%;
        }
        .answer {
          width: 66%;
          padding-bottom: 1.5em;
        }
      }
    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('faq'),
  withQuestions,
  pure,
)(Support));
