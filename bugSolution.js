```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This will run whenever the count changes
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // Correct dependency array includes 'count'

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```