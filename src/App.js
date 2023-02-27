import { Configuration, OpenAIApi } from 'openai';

import { useState } from 'react';

const App = () => {
	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});

	const openai = new OpenAIApi(configuration);

	const [newQuestion, setNewQuestion] = useState('');
	const [storedValues, setStoredValues] = useState([]);

	const generateResponse = async () => {
		let options = {
			model: 'text-davinci-003',
			temperature: 0,
			max_tokens: 100,
			top_p: 1,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
			stop: ['/'],
		};

		let completeOptions = {
			...options,
			prompt: newQuestion,
		};

		const response = await openai.createCompletion(completeOptions);

		if (response.data.choices) {
			setStoredValues([
				{
					question: newQuestion,
					answer: response.data.choices[0].text,
				},
				...storedValues,
			]);
			setNewQuestion('');
		}
	};
	return (
		<div>
			<div className="header-section">
				<h1>ChatGPT CLONE 🤖</h1>
				{storedValues.length < 1 && (
					<p>
						I am an automated question and answer system, designed to assist you
						in finding relevant information. You are welcome to ask me any
						queries you may have, and I will do my utmost to offer you a
						reliable response. Kindly keep in mind that I am a machine and
						operate solely based on programmed algorithms.
					</p>
				)}
			</div>
			<div className="form-section">
				<textarea
					rows="5"
					className="form-control"
					placeholder="Ask me anything..."
					value={newQuestion}
					onChange={(e) => setNewQuestion(e.target.value)}
				></textarea>
				<button className="btn" onClick={generateResponse}>
					Generate Response 🤖
				</button>
			</div>

			{storedValues.length > 0 && (
				<>
					<hr className="hr-line" />
					{/* <div className="answer-section">
						<p className="question">{question}</p>
						<p className="answer">{answer}</p>
						<div className="copy-icon">
							<i className="fa-solid fa-copy"></i>
						</div>
					</div> */}
					<div className="answer-container">
						{storedValues.map((value, index) => {
							return (
								<div className="answer-section" key={index}>
									<p className="question">{value.question}</p>
									<p className="answer">{value.answer}</p>
									<div className="copy-icon">
										<i className="fa-solid fa-copy"></i>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default App;
