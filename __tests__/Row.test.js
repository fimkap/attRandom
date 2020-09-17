import 'react-native'
import React  from 'react'
import { render} from '@testing-library/react-native'
import {Row} from '../components/Row'
import {expect, it} from '@jest/globals'

const itemMock = { name: {first: 'Mitchell' ,last: 'Myers'} };
const itemMockNoLastName = { name: {first: 'Mitchell'} };

it('renders correctly', () => {
  const {getByText} = render(<Row {...itemMock} onSelectContact={() => {}} />)

  const rowText = getByText(/Mitchell/)
  expect(rowText.props.children).toEqual(["Mitchell", " ", "Myers"])
});

it('renders correctly with no last name', () => {
  const { getByText } = render(
    <Row {...itemMockNoLastName} onSelectContact={() => {}} />
  );

  const rowText = getByText(/Mitchell/)
  expect(rowText.props.children).toEqual(["Mitchell", " ", ""])
});
