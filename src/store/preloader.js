const preloadedState = (hydratedState) => ({
  count: hydratedState ? hydratedState.count : Math.random() * 100
});

export default preloadedState;
