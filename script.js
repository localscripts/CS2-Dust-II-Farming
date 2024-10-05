// Fetch the content from JSON and dynamically insert it into the HTML
fetch('content.json')
    .then(response => response.json())
    .then(data => {
        // Set the page title
        document.getElementById('title').textContent = data.strategy.title;

        // Create sections from the JSON data
        let contentDiv = document.getElementById('content');
        data.strategy.sections.forEach(section => {
            let sectionElement = document.createElement('div');
            sectionElement.classList.add('strategy-section');

            let heading = document.createElement('h2');
            heading.textContent = section.heading;
            sectionElement.appendChild(heading);

            let paragraph = document.createElement('p');
            paragraph.textContent = section.content;
            sectionElement.appendChild(paragraph);

            contentDiv.appendChild(sectionElement);
        });

        // Set the footer text
        document.getElementById('footer').textContent = data.strategy.footer;

        // Create the button from JSON data
        const button = document.createElement('a');
        button.textContent = data.button.text; // Get button text from JSON
        button.href = data.button.link; // Get link from JSON
        button.className = 'button'; // Add a class for styling
        button.target = '_blank'; // Open link in a new tab
        button.rel = 'noopener noreferrer'; // Security for opening new tab

        // Append the button to a designated container in your HTML
        const buttonContainer = document.getElementById('button-container');
        buttonContainer.appendChild(button);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
