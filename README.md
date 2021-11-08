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

## `useFetch`:
Takes an `url` and an optional `initial data` and returns 2 parameters:
1. `loading`: Boolean that is set to `true` while loading is not finished.
2. `data`: The data retrieved from the URL.

This hook uses the **axios** library that needs to be installed first!
### Example:
```
const {loading, data} = useFetch(
  "https://jsonplaceholder.typicode.com/posts/"
);
```
