import { test } from "../data/sampleTest"
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

export default function ExampleTest() {

	const [responseList, setResponseList] = useState(Array(test.length))
	const setSingleResponse = (idx, response) => {
		var start = responseList.slice(0, idx)
		start.push(response)
		var end = responseList.slice(idx+1)
		setResponseList(start.concat(end))
	}

	const history = useHistory()
	const routeChange = () => { 
		let path = `results`
		history.push(path, { testResponse: responseList })
	}

	return (
		<div>
			<h2>Test</h2>
			{test.map((testQuestion, idx) => (
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Question</Card.Title>
						<Card.Text>
							{testQuestion["question"]}
						</Card.Text>
					</Card.Body>
					<TestQuestions idx={idx} setSingleResponse={setSingleResponse} response={responseList[idx]} options={testQuestion["options"]} />
					<Card.Body>
						<Card.Link href="#">Hint</Card.Link>
						<Card.Link href="#">Answer</Card.Link>
					</Card.Body>
				</Card>
			))}
			<Button variant="success" onClick={routeChange}>Submit</Button>
		</div>
	)
}

function TestQuestions({ idx, setSingleResponse, response, options }) {

	return (
		<ListGroup className="list-group-flush">
			{options.map(option => (
				<ListGroupItem variant={option === response ? "success" : "light"} action onClick={() => {
					setSingleResponse(idx, option)
				}}>
					{option}
				</ListGroupItem>
			))}
		</ListGroup>
	)
}