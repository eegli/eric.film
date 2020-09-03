# Why test the test?

I had trouble setting up jest since Next.js uses a very custom webpack configuration - most of it cannot be changed.

The current `jest.config.js` works and this directory makes sure all file extensions - TS, TSX (and even JS, JSX) - can be tested with the setup.
