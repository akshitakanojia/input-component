import React from 'react'
import Input from './Input'
import { InputsWrapper, Title, Text, Row, ComponentWrapper } from './Inputs.elements'

const Inputs = () => {
	return (
		<InputsWrapper>
			<Title>Inputs</Title>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input /&gt;</Text>
					<Input />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input error /&gt;</Text>
					<Input error />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input disabled /&gt;</Text>
					<Input disabled />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input helperText=”Some interesting text” /&gt;</Text>
					<Input helperText="Some interesting text" />
				</ComponentWrapper>
				<ComponentWrapper>
					<Text>&lt;Input helperText=”Some interesting text” error /&gt;</Text>
					<Input helperText="Some interesting text" error />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input size=”sm” /&gt;</Text>
					<Input size="sm" />
				</ComponentWrapper>
				<ComponentWrapper>
					<Text>&lt;Input size=”md” /&gt;</Text>
					<Input size="md" />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input startIcon /&gt;</Text>
					<Input startIcon="phone" />
				</ComponentWrapper>
				<ComponentWrapper>
					<Text>&lt;Input endIcon /&gt;</Text>
					<Input endIcon="lock" />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input value=”text” /&gt;</Text>
					<Input value="Text" />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper wide>
					<Text>&lt;Input fullWidth /&gt;</Text>
					<Input fullWidth />
				</ComponentWrapper>
			</Row>

			<Row>
				<ComponentWrapper>
					<Text>&lt;Input multiline row=”4” /&gt;</Text>
					<Input multiline rows="4" />
				</ComponentWrapper>
			</Row>

		</InputsWrapper>
	)
}

export default Inputs
