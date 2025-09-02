# Component Test Utils

Universal testing utilities for component libraries across different frameworks (React, Vue, Angular, Vanilla JS).

##  Features

- **Universal API**: Same testing interface across React, Vue, Angular, and Vanilla JS
- **Framework Adapters**: Seamlessly integrates with each framework's testing ecosystem
- **Rich Assertions**: Extended matchers for component testing
- **Accessibility Testing**: Built-in accessibility testing utilities
- **Performance Testing**: Measure render and re-render performance
- **TypeScript Support**: Full TypeScript definitions included

##  Installation

`ash
npm install component-test-utils
`

### Framework-specific peer dependencies

For React:
`ash
npm install @testing-library/react react
`

For Vue:
`ash
npm install @testing-library/vue vue
`

For Angular:
`ash
npm install @angular/testing @angular/core
`

##  Usage

### Basic Setup

`	ypescript
import { createTestUtils } from 'component-test-utils';

// Create test utilities for your framework
const testUtils = createTestUtils({ framework: 'react' });
`

### React Example

`	ypescript
import React from 'react';
import { createTestUtils } from 'component-test-utils';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

describe('Button Component', () => {
  const testUtils = createTestUtils({ framework: 'react' });

  it('renders button with text', () => {
    const { element } = testUtils.render(<Button>Click me</Button>);
    
    expect(element).toBeInDocument();
    expect(element).toHaveTextContent('Click me');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const { element } = testUtils.render(
      <Button onClick={handleClick}>Click me</Button>
    );
    
    testUtils.fireEvent(element, 'click');
    expect(handleClick).toHaveBeenCalled();
  });
});
`

### Vue Example

`	ypescript
import { createTestUtils } from 'component-test-utils';

const Button = {
  props: ['children'],
  template: '<button @click="('click')">{{ children }}</button>'
};

describe('Button Component', () => {
  const testUtils = createTestUtils({ framework: 'vue' });

  it('renders button with text', () => {
    const { element } = testUtils.render(Button, { children: 'Click me' });
    
    expect(element).toBeInDocument();
    expect(element).toHaveTextContent('Click me');
  });
});
`

### Vanilla JavaScript Example

`	ypescript
import { createTestUtils } from 'component-test-utils';

const createButton = (text) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = 'btn';
  return button;
};

describe('Button Component', () => {
  const testUtils = createTestUtils({ framework: 'vanilla' });

  it('renders button with text', () => {
    const { element } = testUtils.render(() => createButton('Click me'));
    
    expect(element).toBeInDocument();
    expect(element).toHaveTextContent('Click me');
    expect(element).toHaveClass('btn');
  });
});
`

##  Accessibility Testing

`	ypescript
import { testAccessibility } from 'component-test-utils';

it('meets accessibility standards', async () => {
  const { element } = testUtils.render(<MyComponent />);
  const violations = await testAccessibility(element);
  
  expect(violations).toHaveLength(0);
});
`

##  Performance Testing

`	ypescript
import { measureRenderPerformance } from 'component-test-utils';

it('renders within performance budget', async () => {
  const metrics = await measureRenderPerformance(
    () => testUtils.render(<ComplexComponent />),
    { iterations: 10 }
  );
  
  expect(metrics.renderTime).toBeLessThan(16); // 60fps budget
});
`

##  Custom Matchers

The library extends Jest with custom matchers for better component testing:

- 	oBeInDocument() - Element is in the DOM
- 	oBeVisible() - Element is visible to users
- 	oHaveTextContent(text) - Element contains specific text
- 	oHaveAttribute(attr, value?) - Element has attribute
- 	oHaveClass(className) - Element has CSS class
- 	oHaveStyle(styles) - Element has specific styles

##  API Reference

### TestUtils Configuration

`	ypescript
interface TestUtilsConfig {
  framework: 'react' | 'vue' | 'angular' | 'vanilla';
  timeout?: number;
  debug?: boolean;
  accessibility?: boolean;
  performance?: boolean;
}
`

### Test Result

`	ypescript
interface ComponentTestResult {
  element: any;
  container: any;
  rerender?: (props?: any) => void;
  unmount: () => void;
  debug: () => void;
}
`

##  Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

##  License

MIT License - see the [LICENSE](LICENSE) file for details.

##  Links

- [GitHub Repository](https://github.com/NarottamSharma/component-test-utils)
- [NPM Package](https://www.npmjs.com/package/component-test-utils)
- [Documentation](https://github.com/NarottamSharma/component-test-utils#readme)
- [Issues](https://github.com/NarottamSharma/component-test-utils/issues)

##  Author

**Narottam Sharma**
- GitHub: [@NarottamSharma](https://github.com/NarottamSharma)
- Email: narottam.sharma.dev@gmail.com
