
const dropdowns = document.querySelectorAll('.habit-status-dropdown');


dropdowns.forEach(function(dropdown) {
    // Add a change event listener to each dropdown
    dropdown.addEventListener('change', function() {
        // Extract the id attribute of the dropdown element
        const id = this.id;
        console.log(id);
        // Get the selected value from the dropdown
        const status = this.value;
        console.log(status);

        // Construct the URL
        const url = `http://localhost:3000/habits/toggleStatus?id=${id}&status=${status}`;

        // Redirect to the constructed URL
        window.location.href = url;
    });
});
