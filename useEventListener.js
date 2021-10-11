import { useEffect, useRef } from "react";

export const useEventListener = (eventName, handler, domNode = window) => {
  // Store handler in react reference
  const savedHandler = useRef();

  // Stores the handler to savedHandler and updates
  // it every time handler changes
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Make sure that the element supports addEventListener.
    const isSupported = domNode && domNode.addEventListener;
    if (!isSupported) return;

    // Create event listener that calls the handler in savedHandler
    const eventListner = (domNode) => savedHandler.current(domNode);

    // Add event listner
    domNode.addEventListener(eventName, eventListner);

    // Remove on cleanup
    return () => {
      domNode.removeEventListener(eventName, eventListner);
    };
  }, [eventName, domNode]); // Rerun if
};
