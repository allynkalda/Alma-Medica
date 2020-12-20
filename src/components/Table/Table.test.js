import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

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


test('renders all headers necessary', () => {
    render(<Table patients={list} />);
    const id = screen.getByText('ID');
    const name = screen.getByText('NAME');
    const surname = screen.getByText('SURNAME');
    const birthdate = screen.getByText('BIRTHDATE');
    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(birthdate).toBeInTheDocument();
});

test('renders three rows', () => {
    render(<Table patients={list} />);
    const rows = screen.queryAllByLabelText('body-row');
    expect(rows.length).toBe(3);
});

test('renders three buttons', () => {
    render(<Table patients={list} />);
    const buttons = screen.queryAllByLabelText('button');
    expect(buttons.length).toBe(3);
});

test('renders sample birthdate in row', () => {
    render(<Table patients={list} />);
    const name = screen.getByText('Mario');
    const surname = screen.getByText('Sanchez');
    expect(name).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
});

test('renders sample name in row', () => {
    render(<Table patients={list} />);
    const birthdate = screen.getByText('1990-01-11');
    expect(birthdate).toBeInTheDocument();
});