// Import the firebase configuration
import './FireBaseConfig';

// Check if Firebase initialization is successful
if (console.log.calls.any()) {
  console.log("Firebase initialization successful!");
} else {
  console.error("Firebase initialization failed!");
}
