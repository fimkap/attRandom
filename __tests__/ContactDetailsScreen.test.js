import 'react-native'
import React  from 'react'
import {render} from '@testing-library/react-native'
import {ContactDetailsScreen} from '../screens/ContactDetailsScreen'
import {expect, it} from '@jest/globals'

const contactMock = {
  route: {
    params: {
      name: { title: "Mr", first: "Mitchell", last: "Myers" },
      location: {
        street: { number: 5323, name: "Park Road" },
        city: "Enniscorthy",
        state: "Donegal",
        country: "Ireland",
      },
      email: "mitchell.myers@example.com",
      phone: "051-305-1279",
      picture: {
        large: "https://randomuser.me/api/portraits/men/69.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
      },
    },
  },
};

const contactMockNoEmail = {
  route: {
    params: {
      name: { title: "Mr", first: "Mitchell", last: "Myers" },
      location: {
        street: { number: 5323, name: "Park Road" },
        city: "Enniscorthy",
        state: "Donegal",
        country: "Ireland",
      },
      phone: "051-305-1279",
      picture: {
        large: "https://randomuser.me/api/portraits/men/69.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
      },
    },
  },
};

const contactMockNoLastName = {
  route: {
    params: {
      name: { title: "Mr", first: "Mitchell" },
      location: {
        street: { number: 5323, name: "Park Road" },
        city: "Enniscorthy",
        state: "Donegal",
        country: "Ireland",
      },
      email: "mitchell.myers@example.com",
      phone: "051-305-1279",
      picture: {
        large: "https://randomuser.me/api/portraits/men/69.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
      },
    },
  },
};

it('renders correctly with the full details', () => {
  const {getByText} = render(<ContactDetailsScreen {...contactMock} />);

  const rowText = getByText(/Mitchell/)
  expect(rowText.props.children).toEqual(["Mitchell", " ", "Myers"])
  const phone = getByText(/051/)
  expect(phone.props.children).toEqual("051-305-1279")
  const email = getByText(/mitchell/)
  expect(email.props.children).toEqual("mitchell.myers@example.com")
});

it('renders correctly with no email', () => {
  const {getByText} = render(<ContactDetailsScreen {...contactMockNoEmail} />);

  try {
    const email = getByText(/mitchell/);
  } catch(e) {
    expect(e.message).toBe("No instances found");
  }
});

it('renders correctly with no last name', () => {
  const {getByText} = render(<ContactDetailsScreen {...contactMockNoLastName} />);

  const rowText = getByText(/Mitchell/);
  expect(rowText.props.children).toEqual(["Mitchell", " ", ""])
});
