# Performance comparison

This is a simple PoC to show the difference in page load time for 2 different approaches:
1. Using inline scripts after each react component
2. Batch-rendering react components using requestAnimationFrame

### How to use it?

This project uses nodejs. After cloning the repository run `npm install`. Then you can run `npm start` to start the project.

Go to http://localhost:5000 in your web browser and run the tests. Open console in developer tools to see the results.
You can pass `count={number}` query param to set the number of rendered react components (default is 100).

### Results

Test results for rendering 500 components

    inline-scripts.html?count=500:7 DOM fully loaded and parsed 432.33499999769265
    request-animation-frame.html?count=500:7 DOM fully loaded and parsed 35.29499999422114
