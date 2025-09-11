import { useRef, useState, useEffect } from 'react';

const UseRefExamples = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>useRef Examples</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <FocusInputExample />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <UncontrolledFormExample />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <PreviousValueExample />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <TimerExample />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <ScrollToElementExample />
      </div>
    </div>
  );
};

// Example 1: Focus Input - Most Common Use Case
const FocusInputExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Direct DOM manipulation - focus the input
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>1. Focus Input Example</h3>
      <p>Click the button to focus the input field</p>
      
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Type something..." 
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      
      <button onClick={focusInput} style={{ padding: '8px 16px', marginRight: '10px' }}>
        Focus Input
      </button>
      
      <button onClick={clearInput} style={{ padding: '8px 16px' }}>
        Clear & Focus
      </button>
    </div>
  );
};

// Example 2: Uncontrolled Form - Getting Values Without State
const UncontrolledFormExample = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get values directly from DOM elements
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };
    
    alert(`Form Data:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    
    // Reset form
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>2. Uncontrolled Form Example</h3>
      <p>Form that doesn't use state for input values</p>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input 
            ref={nameRef}
            type="text" 
            placeholder="Your Name" 
            style={{ padding: '8px', width: '200px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <input 
            ref={emailRef}
            type="email" 
            placeholder="Your Email" 
            style={{ padding: '8px', width: '200px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <textarea 
            ref={messageRef}
            placeholder="Your Message" 
            style={{ padding: '8px', width: '200px', height: '60px' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '8px 16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Example 3: Store Previous Value - useRef Persists Across Renders
const PreviousValueExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Store previous values using useRef
  const prevCountRef = useRef();
  const prevNameRef = useRef();
  
  // Update previous values after each render
  useEffect(() => {
    prevCountRef.current = count;
    prevNameRef.current = name;
  });

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>3. Previous Value Example</h3>
      <p>useRef persists values without causing re-renders</p>
      
      <div style={{ marginBottom: '15px' }}>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCountRef.current}</p>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ padding: '8px 16px' }}
        >
          Decrement
        </button>
      </div>
      
      <div>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
          style={{ padding: '8px', width: '200px', marginBottom: '10px' }}
        />
        <p>Current Name: {name}</p>
        <p>Previous Name: {prevNameRef.current}</p>
      </div>
    </div>
  );
};

// Example 4: Timer with useRef - Store Mutable Value
const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Store timer ID in ref so it persists across renders
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>4. Timer Example</h3>
      <p>useRef stores timer ID that persists across renders</p>
      
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
        {formatTime(seconds)}
      </div>
      
      <button 
        onClick={startTimer} 
        disabled={isRunning}
        style={{ 
          padding: '8px 16px', 
          marginRight: '10px',
          backgroundColor: isRunning ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Start
      </button>
      
      <button 
        onClick={stopTimer} 
        disabled={!isRunning}
        style={{ 
          padding: '8px 16px', 
          marginRight: '10px',
          backgroundColor: !isRunning ? '#ccc' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Stop
      </button>
      
      <button 
        onClick={resetTimer}
        style={{ 
          padding: '8px 16px',
          backgroundColor: '#ff9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Reset
      </button>
    </div>
  );
};

// Example 5: Scroll to Element
const ScrollToElementExample = () => {
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToElement = (elementRef) => {
    elementRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>5. Scroll to Element Example</h3>
      <p>Click buttons to scroll to different sections</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => scrollToElement(topRef)}
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          Go to Top
        </button>
        <button 
          onClick={() => scrollToElement(middleRef)}
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          Go to Middle
        </button>
        <button 
          onClick={() => scrollToElement(bottomRef)}
          style={{ padding: '8px 16px' }}
        >
          Go to Bottom
        </button>
      </div>
      
      <div style={{ height: '200px', overflow: 'auto', border: '1px solid #ddd' }}>
        <div ref={topRef} style={{ height: '100px', backgroundColor: '#ffebee', padding: '20px' }}>
          <h4>Top Section</h4>
          <p>This is the top section of the scrollable content.</p>
        </div>
        
        <div style={{ height: '100px', backgroundColor: '#f3e5f5', padding: '20px' }}>
          <h4>Some Content</h4>
          <p>This is some content in between.</p>
        </div>
        
        <div ref={middleRef} style={{ height: '100px', backgroundColor: '#e8f5e8', padding: '20px' }}>
          <h4>Middle Section</h4>
          <p>This is the middle section of the scrollable content.</p>
        </div>
        
        <div style={{ height: '100px', backgroundColor: '#e3f2fd', padding: '20px' }}>
          <h4>More Content</h4>
          <p>This is more content.</p>
        </div>
        
        <div ref={bottomRef} style={{ height: '100px', backgroundColor: '#fff3e0', padding: '20px' }}>
          <h4>Bottom Section</h4>
          <p>This is the bottom section of the scrollable content.</p>
        </div>
      </div>
    </div>
  );
};

export default UseRefExamples;
