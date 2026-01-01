import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServicesList from '@/components/ServicesList';

const mockServices = [
  {
    id: '1',
    category: 'Plumbing',
    title: 'Boiler Service',
    description: 'Annual boiler service and safety check',
    price: 120,
    duration: '60 mins',
    features: ['Gas Safe', 'Certificate Included'],
  },
  {
    id: '2',
    category: 'Electrical',
    title: 'Socket Installation',
    description: 'Install new power socket',
    price: 110,
    duration: '45 mins',
    features: ['Parts Included', 'Safety Test'],
  },
];

describe('ServicesList', () => {
  it('renders all services', () => {
    render(<ServicesList services={mockServices} />);
    
    expect(screen.getByText('Boiler Service')).toBeInTheDocument();
    expect(screen.getByText('Socket Installation')).toBeInTheDocument();
  });

  it('displays correct prices', () => {
    render(<ServicesList services={mockServices} />);

    expect(screen.getByText(/from\s*£\s*120/i)).toBeInTheDocument();
    expect(screen.getByText(/from\s*£\s*110/i)).toBeInTheDocument();
  });

  it('shows features for each service', () => {
    // Features are rendered in the single-category grid layout
    render(<ServicesList services={[mockServices[0]]} />);

    expect(screen.getByText(/gas\s*safe/i)).toBeInTheDocument();
    expect(screen.getByText('Certificate Included')).toBeInTheDocument();
  });

  it('shows empty state when no services', () => {
    render(<ServicesList services={[]} />);
    
    expect(screen.getByText('No services found in this category.')).toBeInTheDocument();
  });

  it('shows category filter in heading', () => {
    render(<ServicesList services={mockServices} categoryFilter="Plumbing" />);
    
    expect(screen.getByText('Plumbing Services')).toBeInTheDocument();
  });

  it('has accessible book buttons', () => {
    render(<ServicesList services={mockServices} />);
    
    const bookButtons = screen.getAllByRole('link', { name: /book/i });
    expect(bookButtons.length).toBe(2);
    expect(bookButtons[0]).toHaveAttribute('href', '/book/1');
    expect(bookButtons[1]).toHaveAttribute('href', '/book/2');
  });
});
