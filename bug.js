```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will only run once on mount
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // Dependency array is missing or incorrect

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```