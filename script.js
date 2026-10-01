const problemInput = document.getElementById("problemInput");
const findHelpBtn = document.getElementById("findHelpBtn");

// Problem search button
findHelpBtn.addEventListener("click", function () {
    const problem = problemInput.value.trim();

    if (problem === "") {
        alert("Please describe your problem first.");
        return;
    }

    alert(
        "Problem received!\n\n" +
        "Your problem:\n" +
        problem +
        "\n\nSmart matching will be added in the next feature."
    );
});

// Service category buttons
const serviceButtons = document.querySelectorAll(".service-btn");

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const service = button.dataset.service;

        alert(
            "Service selected: " +
            service +
            "\n\nService provider matching will be added in a later feature."
        );
    });
});