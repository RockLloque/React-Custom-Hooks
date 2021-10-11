# React-Custom-Hooks
React Hooks are abstractions for function components.  The default hooks are certainly useful but building custom hooks enables us to abstract useful function for reuse.  

# List of hooks:
## `useEventListner`:
Takes an event as a `string` and a handler-function and an optional `element` that is set to `window` by default.
### Example:
```
  useEventListener("keydown", (event) => {
    console.log(`Pressed ${event.keyCode}`);
  });
```
