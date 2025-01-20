import React from 'react'
import './FAQComponent.scss'
import FAQQuestion from './FAQQuestion'

const questionAnswersArray = [
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Yes',
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'You can cancel anytime you want.',
    },
    {
        question: 'Can other info be added to an invoice?',
        answer: 'Yes. Anytime you want.',
    },
    {
        question: 'How does billing work?',
        answer: 'There will be different plans',
    },
    {
        question: 'How do I change my account email?',
        answer: 'Go to settings and change.',
    }
]

function FAQComponent() {
  return (
    <div className='faq_component'>
        <div className='faq_header_container'>
            <h1>Frequently asked questions</h1>
            <p>Everything you need to know about the product and billing.</p>
        </div>
        <div className='faq_question_and_answers'>
            {questionAnswersArray.map((obj) => 
                <>
                    <FAQQuestion
                        question={obj.question}
                        answer={obj.answer}
                    />
                    <div className="border_div"></div>
                </>
            )}
        </div>
        <div className='having_questions_container'>
            <img src={`${import.meta.env.BASE_URL}assets/havingQuestions.svg`}/>
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <button>Get in touch</button>
        </div>
    </div>
  );
}

export default FAQComponent;