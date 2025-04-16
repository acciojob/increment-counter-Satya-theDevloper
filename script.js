//your JS code here. If required.
   const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    // Add click event listener to the button
    incrementButton.addEventListener('click', () => {
      const currentValue = parseInt(counterParagraph.textContent);
      alert("Current counter value: " + currentValue); // Show un-incremented value
      counterParagraph.textContent = currentValue + 1; // Then increment
    });