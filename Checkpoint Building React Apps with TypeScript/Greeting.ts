import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string; // `name` is a required string prop
}

// Functional component with TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;