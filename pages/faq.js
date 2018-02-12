import React from 'react';
import { compose, pure } from 'recompose';
import Markdown from 'react-remarkable';
import variables from '../styles/variables';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import withQuestions from '../lib/hoc/withQuestions';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Support = ({ faq, questions }) => (
  <PageLayout title={faq.meta_title} metaDescription={faq.meta_description}>

    <div className="wrap wrap--narrow mt7">
      <section id="faq" className="section">
        <h2>{faq.faq_title}</h2>
        <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: faq.faq_content,
        }}
        />
        <h3>Answers</h3>
        {questions.map(({ question, answer }) => (
          <React.Fragment>
            <div className="question">{question}</div>
            <p className="answer">
              <Markdown source={answer} />
            </p>
          </React.Fragment>
        ))}
      </section>

    </div>


    <style jsx>{`
      .question {
        padding-top: 1em;
        font-weight: 500;
      }
      .answer {
        padding-top: .5em;
        padding-bottom: 2em;
        border-bottom: 2px dashed ${variables.lineGrayColor};
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
