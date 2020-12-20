import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

const list = [
    {
      id: '123',
      name: 'Mario',
      surname: 'Sanchez',
      birthdate: '1982-01-11'
    },
    {
      id: '122',
      name: 'Carla',
      surname: 'Jimenez',
      birthdate: '1989-01-11'
    },
    {
      id: '111',
      name: 'Jane',
      surname: 'Doe',
      birthdate: '1990-01-11'
    },
];


test('renders all inputs necessary', () => {
    render(<Form patients={list} />);
    const id = screen.getByLabelText('id');
    const name = screen.getByLabelText('name');
    const surname = screen.getByLabelText('surname');
    const birthdate = screen.getByLabelText('birthdate');
    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(birthdate).toBeInTheDocument();
});

test('renders both buttons', () => {
    render(<Form patients={list} />);
    const buttonAdd = screen.getByText('Add client');
    const buttonCancel = screen.getByText('Cancel');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
});

test('does not render alerts', () => {
    render(<Form patients={list} />);
    const alert = screen.queryByLabelText('alert');
    expect(alert).toBeNull();
});