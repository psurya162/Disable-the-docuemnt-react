import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      alert("Sorry!! Right click is disabled.");
    };

    const handleKeyDown = (event) => {
      // Combine key parts into a string
      const keyCombination = `${event.ctrlKey ? 'Ctrl+' : ''}${event.metaKey ? 'Meta+' : ''}${event.altKey ? 'Alt+' : ''}${event.key}`;

      // Prevent specific key combinations
      if (keyCombination === 'Ctrl+u' || keyCombination === 'Meta+Alt+u' || event.keyCode === 123) {
        event.preventDefault();
        alert(`Sorry!! ${keyCombination} is not allowed.`);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      Try right-clicking or pressing certain key combinations (e.g., Ctrl+U, Meta+Alt+U).
    </div>
  );
}

export default App;
