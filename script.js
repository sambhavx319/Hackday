const problemInput = document.getElementById("problemInput");
const findHelpBtn = document.getElementById("findHelpBtn");

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