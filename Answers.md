1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Filter, Map and forEach.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Your store the whole state tree of your applications. Actions are the only source of information to your store. While reducers specify how the state changes based on the information from your actions.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Your application state is global, and your component state is local. Whenever state needs to be compared by multiple components or pages it probably a good idea to use app state. If not then it is probably overkill and component state will be fine.
1.  What is middleware?
Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect
