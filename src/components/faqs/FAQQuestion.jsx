import React, { useState } from 'react'
import './FAQQuestion.scss'

function FAQQuestion(props) {
    const {question, answer} = props;

    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className='faq_question_container'>
            <div className='question_button'>
                <h3>{question}</h3>
                <div className='button_container' onClick={() => setShowAnswer(prev => !prev)}>
                    <img src={showAnswer ? `${import.meta.env.BASE_URL}assets/closeFaqAnswer.svg` : `${import.meta.env.BASE_URL}assets/openFaqAnswer.svg`}/>
                </div>
            </div>
            {showAnswer && <p>{answer}</p>}
        </div>
    )
}

export default FAQQuestion;