# Expo Camera: Asynchronous Initialization Error

This repository demonstrates a common error when working with the Expo Camera API: attempting to access camera features before the camera has finished initializing. This often leads to undefined values or exceptions. The solution involves using the `status` property and only accessing the camera once it's ready.

## Bug
The `bug.js` file shows how incorrect usage of the Expo Camera API leads to errors.  Specifically, we attempt to take a picture before the camera has fully initialized, resulting in an error or undefined values.

## Solution
The `bugSolution.js` file showcases the correct approach. We use the `status` property to track the camera's state. Only when the camera is ready (`status === 'ready') do we proceed with taking a picture. This prevents errors caused by accessing the camera prematurely.  This improved approach ensures robust handling of camera initialization.