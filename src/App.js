import FormSection from './components/FormSection';
import AnswerSection from './components/AnswerSection';

const App = () => {
	return (
		<div>
			<div className="header-section">
				<h1>ChatGPT CLONE 🤖</h1>
				<p>
					I am an automated question and answer system, designed to assist you
					in finding relevant information. You are welcome to ask me any queries
					you may have, and I will do my utmost to offer you a reliable
					response. Kindly keep in mind that I am a machine and operate solely
					based on programmed algorithms.
				</p>
			</div>

			<FormSection />
			<AnswerSection />
		</div>
	);
};

export default App;
