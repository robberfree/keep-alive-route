# keep-alive-route

[demo](https://robberfree.github.io/keep-alive-route/demo/build/index.html#/)

## why do we need KeepAliveRoute component？

When route change in `react-router-dom`, old component was destroyed and new component matched the route will be created.
That is ok.

But sometimes we want to keep old component's state when route change. It's useful to let user do nothing to view same page when come back.

## how to implement KeepAliveRoute？

Maybe two ways:

1. when route change, don't destroy old component. ✅

2. save old component's state data. Use the old data to restore the component's state when it is created again.

KeepAliveRoute adopt first way. This method is simple and straightforward, but overuse may cause memory leaks.

## how to use KeepAliveRoute？

```jsx
import KeepAliveRoute from "keep-alive-route";
```

KeepAliveRoute is completely based on [react-router-dom.Route](https://reactrouter.com/web/api/Route). The usage is exactly the same as it.
