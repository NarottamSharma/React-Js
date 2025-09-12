import React, { useRef, useState, useEffect } from 'react';

// Simple useRef Example Component
const UseRefDemo = () => {
  // 1. Ref for DOM element
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  
  // 2. Ref for storing mutable values
  const renderCount = useRef(0);
  const previousValue = useRef('');
  const secretCounter = useRef(0); // This won't cause re-renders
  
  // 3. State for demonstration
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0);

  // Track render count
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    previousValue.current = inputValue;
  });

  // Functions using refs
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#ffffcc';
  };

  const clearInput = () => {
    inputRef.current.value = '';
    setInputValue('');
    inputRef.current.style.backgroundColor = 'white';
  };

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>🎯 useRef Hook Examples</h2>
      
      {/* Render Information */}
      <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
        <p><strong>Component rendered:</strong> {renderCount.current} times</p>
        <p><strong>Previous input value:</strong> "{previousValue.current}"</p>
        <p><strong>Current input value:</strong> "{inputValue}"</p>
        <p><strong>Secret counter:</strong> {secretCounter.current} (only updates on re-render)</p>
      </div>

      {/* Example 1: DOM Manipulation */}
      <div style={{ marginBottom: '20px' }}>
        <h3>1. 🎯 Direct DOM Access</h3>
        <input 
          ref={inputRef}
          type="text"
          placeholder="Type something here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
        <button onClick={focusInput} style={{ marginRight: '5px', padding: '8px' }}>
          Focus & Highlight
        </button>
        <button onClick={clearInput} style={{ padding: '8px' }}>
          Clear Input
        </button>
      </div>

      {/* Example 2: Video Control */}
      <div style={{ marginBottom: '20px' }}>
        <h3>2. 🎬 Video Control</h3>
        <video 
          ref={videoRef}
          width="300" 
          height="200" 
          controls
          style={{ display: 'block', marginBottom: '10px' }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={playVideo} style={{ marginRight: '5px', padding: '8px' }}>
          ▶️ Play
        </button>
        <button onClick={pauseVideo} style={{ padding: '8px' }}>
          ⏸️ Pause
        </button>
      </div>

      {/* Example 3: Counter without re-render */}
      <div style={{ marginBottom: '20px' }}>
        <h3>3. 📊 State vs Ref Comparison</h3>
        <p>Count (causes re-render): {count}</p>
        <p style={{ color: '#666' }}>
          📝 Notice: The secret counter display only updates when the component re-renders!
        </p>
        
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => setCount(count + 1)} 
            style={{ marginRight: '5px', padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
          >
            Increment State (+1) - Triggers Re-render
          </button>
          
          <button 
            onClick={() => {
              secretCounter.current = secretCounter.current + 10;
              alert(`Secret counter is now: ${secretCounter.current}\n\nBut the display won't update until the component re-renders!\n\nThis is the key difference: useRef doesn't trigger re-renders.`);
            }} 
            style={{ marginRight: '5px', padding: '8px', backgroundColor: '#ff9800', color: 'white', border: 'none' }}
          >
            Increment Secret Ref (+10) - No Re-render
          </button>
          
          <button 
            onClick={() => {
              console.log('Current secret counter value:', secretCounter.current);
              alert(`Check console! Secret counter value: ${secretCounter.current}`);
            }} 
            style={{ padding: '8px', backgroundColor: '#2196F3', color: 'white', border: 'none' }}
          >
            Check Ref Value
          </button>
        </div>
        
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
          <strong>🧪 Experiment:</strong>
          <ol>
            <li>Click "Increment Secret Ref (+10)" multiple times</li>
            <li>Notice the display doesn't change (no re-render)</li>
            <li>Then click "Increment State (+1)" once</li>
            <li>Watch the secret counter display jump to its actual value!</li>
          </ol>
        </div>
      </div>

      {/* Key Points */}
      <div style={{ background: '#e8f4fd', padding: '15px', borderRadius: '5px' }}>
        <h3>🔑 Key Points about useRef:</h3>
        <ul>
          <li><strong>DOM Access:</strong> Get direct reference to DOM elements</li>
          <li><strong>Mutable Values:</strong> Store values that persist across renders</li>
          <li><strong>No Re-renders:</strong> Changing ref.current doesn't trigger re-renders</li>
          <li><strong>Persists:</strong> Values survive component re-renders</li>
          <li><strong>Common Uses:</strong> Focus management, timers, previous values</li>
        </ul>
      </div>
    </div>
  );
};

export default UseRefDemo;
