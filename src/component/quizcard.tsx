import React from "react";

type Props = {
    question: string;
    answers: string[];
    callback: any;
    useranswer: string; // Add missing import for 'useranswer' prop
    questionNumber: number;
    totalQuestions: number;
    
}

const QuizCard: React.FC<Props>= ({question,answers,callback,questionNumber, totalQuestions, useranswer}) => (
    <><div>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
    </div><div>
            answers.map((answer) ={">"} ()
            <div>
                <button disabled={useranswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answers }} />
                </button>
            </div>
            );

            export default QuizCard;
        </></>
