import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Contact from ".";

describe('Contact', () => {
  it('renders contact component', () => {
    const component = render(<Contact />)
    expect(component).toMatchSnapshot()
  })
})