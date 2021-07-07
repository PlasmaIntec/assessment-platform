import { test } from "../data/sampleTest"

export default function ExampleTest() {
	return (
		<div>
			<h2>Test</h2>
			{test.map(testQuestion => (
				<>
					<h3>{testQuestion["question"]}</h3>
					{testQuestion["options"].map(option => (
						<h4>{option}</h4>
					))}
				</>
			))}
		</div>
	)
}