componentWillUnmount() is a lifecycle method in class-based React components.

It is invoked just before a component is removed from the DOM.

Commonly used for cleanup tasks to prevent memory leaks.

Ideal for clearing timers like setTimeout or setInterval.

Used to unsubscribe from events, listeners, or data streams.

Helps stop API polling or background processes.

Runs only once during the component’s lifecycle.

Does not update state; it’s meant purely for cleanup.

Ensures better performance and stability of the application.

In functional components, similar behavior is achieved using useEffect cleanup.
