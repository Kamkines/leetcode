async function sleep(millis) {
     return await new Promise((resolve) =>
          setTimeout(() => resolve(millis), millis)
     );
}

// Example

sleep(10000);
