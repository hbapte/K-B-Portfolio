// Function to handle navigation without full page reload, scroll to the section, and update the URL
function navigateTo(event, sectionId) {
    event.preventDefault();

    // Scroll to the selected section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Update the URL without adding a new entry to the browser's history
      const path = `/${sectionId}`;
      history.replaceState({ sectionId }, '', path);
    }
  }

  // Event listener to handle back/forward button navigation
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.sectionId) {
      // Scroll to the section when navigating using back/forward buttons
      const section = document.getElementById(event.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Initial content scroll based on the current URL path
  if (window.location.pathname !== '/') {
    const initialSectionId = window.location.pathname.slice(1);
    const initialSection = document.getElementById(initialSectionId);
    if (initialSection) {
      initialSection.scrollIntoView({ behavior: 'smooth' });
    }
  }