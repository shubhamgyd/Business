import { useState, useEffect } from "react";

export const MathGame = () => {
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState(null);

    const generateQuestion = () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        setQuestion({ a, b })
    }

    useEffect(() => generateQuestion(), []);

    const checkAnswer = (value) => {
        if (typeof question.a === "number" && typeof question.b === "number" && parseInt(value) === question.a + question.b) {
            setStatus("correct");
        } else {
            setStatus("wrong");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-[300px] text-center">
                <div className="text-xl font-semibold mb-4">
                    {typeof question.a === "number" && typeof question.b === "number"
                        ? `The question is ${question.a} + ${question.b} = ?`
                        : "Loading question..."}
                </div>
                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
                <div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
                        onClick={() => {
                            if (answer.length > 0) {
                                checkAnswer(answer);
                            } else {
                                setStatus("no-answer");
                            }
                        }}
                    >
                        Check
                    </button>
                    <div className="mt-4">
                    {status === "correct" && (
                        <div>
                            <div className="text-green-600 font-semibold">✅ Correct Answer!</div>
                            <label htmlFor="next_question">Take to next question.</label>
                            <div>
                                <button
                                    id="next_question"
                                    className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                                    onClick={() => {
                                        generateQuestion();
                                        setAnswer("");
                                        setStatus("None");
                                    }}
                                >
                                    Next Question
                                </button>
                            </div>
                        </div>
                    )}
                    {status === "wrong" && (
                        <div className="text-red-500">❌ Wrong, try again</div>
                    )}
                    {status === "no-answer" && (
                        <div className="text-yellow-500">⚠️ Please enter an answer</div>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}