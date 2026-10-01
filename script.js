document.addEventListener("DOMContentLoaded", function () {

    console.log("SmartFix JavaScript started");


    // ========================================================
    // PROVIDER DATA
    // ========================================================

    const providerData = {

        "Plumber": [
            {
                name: "Ram Plumbing Service",
                location: "Bharatpur",
                phone: "9800000001",
                experience: "8 years"
            },
            {
                name: "Chitwan Pipe Care",
                location: "Bharatpur",
                phone: "9800000002",
                experience: "6 years"
            }
        ],

        "Electrician": [
            {
                name: "Quick Electric Service",
                location: "Bharatpur",
                phone: "9800000003",
                experience: "7 years"
            },
            {
                name: "PowerFix Electrician",
                location: "Bharatpur",
                phone: "9800000004",
                experience: "5 years"
            }
        ],

        "Computer & Laptop": [
            {
                name: "TechFix Computer Center",
                location: "Bharatpur",
                phone: "9800000005",
                experience: "9 years"
            },
            {
                name: "Laptop Care Nepal",
                location: "Bharatpur",
                phone: "9800000006",
                experience: "6 years"
            }
        ],

        "Mobile Repair": [
            {
                name: "Mobile Care Center",
                location: "Bharatpur",
                phone: "9800000007",
                experience: "7 years"
            },
            {
                name: "Quick Mobile Repair",
                location: "Bharatpur",
                phone: "9800000008",
                experience: "5 years"
            }
        ],

        "Locksmith": [
            {
                name: "Fast Key & Lock",
                location: "Bharatpur",
                phone: "9800000009",
                experience: "8 years"
            },
            {
                name: "Chitwan Lock Service",
                location: "Bharatpur",
                phone: "9800000010",
                experience: "6 years"
            }
        ],

        "Cleaning Service": [
            {
                name: "Clean Home Nepal",
                location: "Bharatpur",
                phone: "9800000011",
                experience: "5 years"
            },
            {
                name: "Fresh & Clean Service",
                location: "Bharatpur",
                phone: "9800000012",
                experience: "4 years"
            }
        ],

        "AC / Fridge Technician": [
            {
                name: "CoolTech Service",
                location: "Bharatpur",
                phone: "9800000013",
                experience: "8 years"
            },
            {
                name: "Cooling Expert Nepal",
                location: "Bharatpur",
                phone: "9800000014",
                experience: "6 years"
            }
        ],

        "Vehicle Service": [
            {
                name: "Chitwan Auto Care",
                location: "Bharatpur",
                phone: "9800000015",
                experience: "10 years"
            },
            {
                name: "Quick Bike & Car Service",
                location: "Bharatpur",
                phone: "9800000016",
                experience: "7 years"
            }
        ],

        "Carpenter": [
            {
                name: "Perfect Wood Works",
                location: "Bharatpur",
                phone: "9800000017",
                experience: "9 years"
            },
            {
                name: "Chitwan Carpenter Service",
                location: "Bharatpur",
                phone: "9800000018",
                experience: "7 years"
            }
        ],

        "Painter": [
            {
                name: "Color House Painters",
                location: "Bharatpur",
                phone: "9800000019",
                experience: "8 years"
            },
            {
                name: "Fresh Coat Nepal",
                location: "Bharatpur",
                phone: "9800000020",
                experience: "6 years"
            }
        ],

        "Gardener": [
            {
                name: "Green Garden Service",
                location: "Bharatpur",
                phone: "9800000021",
                experience: "5 years"
            },
            {
                name: "Garden Care Nepal",
                location: "Bharatpur",
                phone: "9800000022",
                experience: "4 years"
            }
        ],

        "Moving / Delivery": [
            {
                name: "QuickMove Delivery",
                location: "Bharatpur",
                phone: "9800000023",
                experience: "6 years"
            },
            {
                name: "Chitwan Delivery Service",
                location: "Bharatpur",
                phone: "9800000024",
                experience: "5 years"
            }
        ],

        "General Handyman": [
            {
                name: "HomeFix Handyman",
                location: "Bharatpur",
                phone: "9800000025",
                experience: "8 years"
            },
            {
                name: "Quick Home Repair",
                location: "Bharatpur",
                phone: "9800000026",
                experience: "6 years"
            }
        ],

        "Home Repair": [
            {
                name: "Smart Home Repair",
                location: "Bharatpur",
                phone: "9800000027",
                experience: "7 years"
            },
            {
                name: "HomeCare Nepal",
                location: "Bharatpur",
                phone: "9800000028",
                experience: "5 years"
            }
        ],

        "Appliance Repair": [
            {
                name: "Appliance Fix Nepal",
                location: "Bharatpur",
                phone: "9800000029",
                experience: "8 years"
            },
            {
                name: "Home Appliance Care",
                location: "Bharatpur",
                phone: "9800000030",
                experience: "6 years"
            }
        ]

    };


    // ========================================================
    // ICONS
    // ========================================================

    const icons = {

        "Plumber": "🔧",
        "Electrician": "⚡",
        "Computer & Laptop": "💻",
        "Mobile Repair": "📱",
        "Locksmith": "🔐",
        "Cleaning Service": "🧹",
        "AC / Fridge Technician": "❄️",
        "Vehicle Service": "🏍️",
        "Carpenter": "🪚",
        "Painter": "🎨",
        "Gardener": "🌱",
        "Moving / Delivery": "📦",
        "General Handyman": "🛠️",
        "Home Repair": "🏠",
        "Appliance Repair": "🔨"

    };


    // ========================================================
    // SHOW PROVIDERS
    // ========================================================

    function showProviders(service) {

        const section = document.getElementById("providers");
        const grid = document.getElementById("providerGrid");
        const title = document.getElementById("providerTitle");
        const subtitle = document.getElementById("providerSubtitle");

        if (!section || !grid) {
            console.error("Provider section not found");
            return;
        }

        const providers = providerData[service] || [];

        title.textContent =
            `${icons[service] || "🛠️"} ${service} Providers`;

        subtitle.textContent =
            `Available ${service.toLowerCase()} providers.`;

        grid.innerHTML = "";

        providers.forEach(function (provider, index) {

            const card = document.createElement("div");

            card.className = "provider-card";

            card.innerHTML = `

                <div class="provider-icon">
                    ${icons[service] || "🛠️"}
                </div>

                <h3>${provider.name}</h3>

                <p>📍 ${provider.location}</p>

                <p>⭐ ${provider.experience}</p>

                <button
                    class="view-provider-btn"
                    type="button"
                    data-service="${service}"
                    data-index="${index}">

                    View Details

                </button>

            `;

            grid.appendChild(card);

        });


        // Details button events

        grid.querySelectorAll(".view-provider-btn")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    const selectedService =
                        button.dataset.service;

                    const selectedIndex =
                        Number(button.dataset.index);

                    openProviderDetails(
                        selectedService,
                        selectedIndex
                    );

                });

            });


        section.scrollIntoView({
            behavior: "smooth"
        });

    }


    // ========================================================
    // PROVIDER DETAILS
    // ========================================================

    function openProviderDetails(service, index) {

        const provider = providerData[service][index];

        const modal =
            document.getElementById("providerModal");

        const content =
            document.getElementById("modalContent");

        if (!provider || !modal || !content) {
            return;
        }

        content.innerHTML = `

            <div class="modal-icon">
                ${icons[service] || "🛠️"}
            </div>

            <h2>${provider.name}</h2>

            <p>
                <strong>Service:</strong>
                ${service}
            </p>

            <p>
                <strong>Location:</strong>
                📍 ${provider.location}
            </p>

            <p>
                <strong>Experience:</strong>
                ⭐ ${provider.experience}
            </p>

            <p>
                <strong>Phone:</strong>
                ${provider.phone}
            </p>

            <button
                id="contactProviderButton"
                class="contact-provider-btn"
                type="button">

                📞 Contact Provider

            </button>

        `;

        modal.style.display = "flex";


        document
            .getElementById("contactProviderButton")
            .addEventListener("click", function () {

                window.location.href =
                    `tel:${provider.phone}`;

            });

    }


    // ========================================================
    // MODAL
    // ========================================================

    const modal =
        document.getElementById("providerModal");

    const closeModal =
        document.getElementById("closeModal");

    if (closeModal) {

        closeModal.addEventListener("click", function () {

            modal.style.display = "none";

        });

    }

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.style.display = "none";

            }

        });

    }


    // ========================================================
    // SERVICE BUTTONS
    // ========================================================

    document
        .querySelectorAll(".service-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const service =
                    button.dataset.service;

                showProviders(service);

            });

        });


    // ========================================================
    // SMART SEARCH
    // ========================================================

    const categories = {

        "Plumber": [
            "tap",
            "faucet",
            "leak",
            "leaking",
            "pipe",
            "plumbing",
            "toilet",
            "sink",
            "drain",
            "water"
        ],

        "Electrician": [
            "electric",
            "electricity",
            "electrical",
            "light",
            "bulb",
            "switch",
            "socket",
            "plug",
            "wire",
            "wiring",
            "fan",
            "power"
        ],

        "Computer & Laptop": [
            "laptop",
            "computer",
            "pc",
            "windows",
            "keyboard",
            "mouse",
            "monitor",
            "screen",
            "boot",
            "computer problem"
        ],

        "Mobile Repair": [
            "phone",
            "mobile",
            "iphone",
            "android",
            "smartphone",
            "charger",
            "charging",
            "phone battery",
            "touch",
            "mobile screen"
        ],

        "Locksmith": [
            "lock",
            "locked",
            "key",
            "keys",
            "unlock",
            "door lock",
            "locked out"
        ],

        "Cleaning Service": [
            "clean",
            "cleaning",
            "dirty",
            "dust",
            "deep clean",
            "house cleaning",
            "room cleaning",
            "office cleaning"
        ],

        "AC / Fridge Technician": [
            "ac",
            "air conditioner",
            "air conditioning",
            "fridge",
            "refrigerator",
            "freezer",
            "cooling",
            "not cold"
        ],

        "Vehicle Service": [
            "car",
            "bike",
            "motorcycle",
            "scooter",
            "vehicle",
            "engine",
            "brake",
            "tyre",
            "tire",
            "mechanic",
            "garage"
        ],

        "Carpenter": [
            "carpenter",
            "wood",
            "wooden",
            "furniture",
            "chair",
            "table",
            "bed",
            "cupboard",
            "cabinet",
            "woodwork"
        ],

        "Painter": [
            "paint",
            "painting",
            "painter",
            "wall color",
            "wall colour",
            "repaint",
            "room color",
            "room colour"
        ],

        "Gardener": [
            "garden",
            "gardener",
            "plant",
            "plants",
            "grass",
            "lawn",
            "tree",
            "flowers",
            "garden maintenance"
        ],

        "Moving / Delivery": [
            "delivery",
            "deliver",
            "package",
            "parcel",
            "courier",
            "send",
            "shipping",
            "moving",
            "move",
            "shift",
            "shifting",
            "transport",
            "moving house",
            "move house",
            "furniture moving",
            "pickup",
            "pick up",
            "take my stuff",
            "send my stuff"
        ],

        "General Handyman": [
            "handyman",
            "maintenance",
            "fix",
            "repair",
            "broken",
            "damaged",
            "damage",
            "home problem"
        ],

        "Home Repair": [
            "home repair",
            "house repair",
            "roof",
            "roof leak",
            "ceiling",
            "wall crack",
            "wall damage"
        ],

        "Appliance Repair": [
            "washing machine",
            "microwave",
            "oven",
            "dishwasher",
            "appliance",
            "appliances",
            "machine broken",
            "machine not working"
        ]

    };


    // ========================================================
    // FIND SERVICE
    // ========================================================

    function findService(text) {

        const input = text.toLowerCase();

        let bestService = null;
        let bestScore = 0;

        Object.keys(categories).forEach(function (service) {

            let score = 0;

            categories[service].forEach(function (keyword) {

                if (input.includes(keyword)) {

                    score++;

                }

            });

            if (score > bestScore) {

                bestScore = score;
                bestService = service;

            }

        });

        return bestService;

    }


    // ========================================================
    // CHAT ELEMENTS
    // ========================================================

    const chatButton =
        document.getElementById("chatButton");

    const chatWindow =
        document.getElementById("chatWindow");

    const closeChat =
        document.getElementById("closeChat");

    const chatInput =
        document.getElementById("chatInput");

    const sendChat =
        document.getElementById("sendChat");

    const chatMessages =
        document.getElementById("chatMessages");


    console.log("Chat elements:", {
        chatButton: !!chatButton,
        chatWindow: !!chatWindow,
        closeChat: !!closeChat,
        chatInput: !!chatInput,
        sendChat: !!sendChat
    });


    // ========================================================
    // OPEN CHAT
    // ========================================================

    if (chatButton) {

        chatButton.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            chatWindow.classList.toggle("active");

            if (chatWindow.classList.contains("active")) {

                setTimeout(function () {

                    chatInput.focus();

                }, 100);

            }

        });

    }


    // ========================================================
    // CLOSE CHAT
    // ========================================================

    if (closeChat) {

        closeChat.addEventListener("click", function () {

            chatWindow.classList.remove("active");

        });

    }


    // ========================================================
    // ADD MESSAGE
    // ========================================================

    function addMessage(message, type) {

        const messageDiv =
            document.createElement("div");

        messageDiv.className =
            type === "user"
                ? "chat-message user-message"
                : "chat-message bot-message";

        messageDiv.innerHTML = message;

        chatMessages.appendChild(messageDiv);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }


    // ========================================================
    // BOT RESPONSE
    // ========================================================

    function botResponse(message) {

        setTimeout(function () {

            addMessage(message, "bot");

        }, 300);

    }


    // ========================================================
    // GET ADVICE
    // ========================================================

    function getAdvice(service) {

        const advice = {

            "Plumber": `
                🔧 This sounds like a <strong>plumbing problem</strong>.
                <br><br>
                If water is leaking, safely turn off the nearby
                water supply if possible.
                <br><br>
                A plumber can inspect and repair the problem.
            `,

            "Electrician": `
                ⚡ This sounds like an <strong>electrical problem</strong>.
                <br><br>
                If safe, switch off the affected electrical circuit.
                <br><br>
                ⚠️ Do not touch exposed wires.
                An electrician should inspect the problem.
            `,

            "Computer & Laptop": `
                💻 This sounds like a <strong>computer/laptop problem</strong>.
                <br><br>
                Check the charger and power connection first.
                If it is completely unresponsive, try holding
                the power button for about 10 seconds.
            `,

            "Mobile Repair": `
                📱 This sounds like a <strong>mobile phone problem</strong>.
                <br><br>
                If it is not charging, try another compatible
                charger and cable.
                <br><br>
                Avoid putting sharp objects inside the charging port.
            `,

            "Locksmith": `
                🔐 This sounds like a <strong>lock/key problem</strong>.
                <br><br>
                Avoid forcing the lock because it could damage
                the door or lock.
                <br><br>
                A locksmith can help safely.
            `,

            "Cleaning Service": `
                🧹 This sounds like a <strong>cleaning service</strong>
                request.
                <br><br>
                You can get help with rooms, kitchens,
                bathrooms, houses or offices.
            `,

            "AC / Fridge Technician": `
                ❄️ This sounds like an <strong>AC/fridge problem</strong>.
                <br><br>
                Check the power and temperature settings.
                If it still isn't cooling, a technician should
                inspect it.
            `,

            "Vehicle Service": `
                🏍️ This sounds like a <strong>vehicle service problem</strong>.
                <br><br>
                A mechanic can help with engines, brakes,
                batteries, tyres and starting problems.
            `,

            "Carpenter": `
                🪚 This sounds like a <strong>carpentry problem</strong>.
                <br><br>
                A carpenter can help with furniture,
                doors, tables, chairs, beds and woodwork.
            `,

            "Painter": `
                🎨 This sounds like a <strong>painting job</strong>.
                <br><br>
                A painter can help with walls, rooms,
                houses and repainting.
            `,

            "Gardener": `
                🌱 This sounds like a <strong>gardening request</strong>.
                <br><br>
                A gardener can help with plants, grass,
                lawns, flowers and garden maintenance.
            `,

            "Moving / Delivery": `
                📦 This sounds like a <strong>moving or delivery request</strong>.
                <br><br>
                SmartFix can help you find someone for
                package delivery, transportation, furniture
                moving or house shifting.
            `,

            "General Handyman": `
                🛠️ This sounds like a <strong>general repair problem</strong>.
                <br><br>
                A handyman can help with smaller household
                repairs and maintenance jobs.
            `,

            "Home Repair": `
                🏠 This sounds like a <strong>home repair problem</strong>.
                <br><br>
                A professional can inspect problems involving
                walls, roofs, ceilings and other parts of your home.
            `,

            "Appliance Repair": `
                🔨 This sounds like an <strong>appliance repair problem</strong>.
                <br><br>
                A technician can help with washing machines,
                microwaves, ovens and other appliances.
            `

        };

        return advice[service] ||
            `🤝 I can help you find the right SmartFix professional.`;

    }


    // ========================================================
    // SEND USER MESSAGE
    // ========================================================

    function sendMessage() {

        const message =
            chatInput.value.trim();

        if (!message) {
            return;
        }

        addMessage(message, "user");

        chatInput.value = "";

        const lower =
            message.toLowerCase();


        // GREETING

        if (
            lower === "hi" ||
            lower === "hello" ||
            lower === "hey" ||
            lower === "namaste" ||
            lower === "namaskar"
        ) {

            botResponse(`
                👋 Hello! I'm <strong>Sajilo Sathi</strong>.
                <br><br>
                Tell me your problem naturally.
                You don't need to use any special words.
                <br><br>
                For example:
                <br>
                📦 "I need to send a package"
                <br>
                🏍️ "My bike won't start"
                <br>
                🎨 "I want to paint my room"
            `);

            return;
        }


        // THANK YOU

        if (
            lower.includes("thank") ||
            lower.includes("thanks")
        ) {

            botResponse(`
                😊 You're welcome!
                <br><br>
                I'm always here whenever you need help.
            `);

            return;
        }


        // EMERGENCY

        if (
            lower.includes("fire") ||
            lower.includes("gas leak") ||
            lower.includes("gas leaking") ||
            lower.includes("smoke")
        ) {

            botResponse(`
                🚨 <strong>Safety first!</strong>
                <br><br>
                Move to a safe place and avoid touching
                electrical or gas equipment.
                <br><br>
                If there is immediate danger, contact
                the appropriate emergency service.
            `);

            return;
        }


        // FIND SERVICE

        const service =
            findService(message);


        if (service) {

            botResponse(`

                ${getAdvice(service)}

                <br><br>

                <strong>
                    🔎 SmartFix Match:
                    ${icons[service]} ${service}
                </strong>

                <br><br>

                <button
                    class="chat-provider-btn"
                    type="button"
                    data-service="${service}">

                    🔎 Find Provider

                </button>

            `);


            // Because the button was created dynamically,
            // attach its click after it appears.

            setTimeout(function () {

                const buttons =
                    chatMessages.querySelectorAll(
                        ".chat-provider-btn"
                    );

                const latest =
                    buttons[buttons.length - 1];

                if (latest) {

                    latest.addEventListener(
                        "click",
                        function () {

                            showProviders(service);

                        }
                    );

                }

            }, 350);

            return;
        }


        // UNKNOWN PROBLEM

        botResponse(`

            🤔 I understand that you need help.

            <br><br>

            Tell me a little more about the problem.

            <br><br>

            For example:

            <br>
            📦 "I need someone to deliver a package"

            <br>
            🪚 "My wooden table is broken"

            <br>
            🌱 "My garden needs maintenance"

            <br>
            🔨 "My washing machine is broken"

            <br><br>

            You can describe the problem in your own words —
            you don't need to use exact keywords.

        `);

    }


    // ========================================================
    // SEND BUTTON
    // ========================================================

    if (sendChat) {

        sendChat.addEventListener(
            "click",
            function () {

                sendMessage();

            }
        );

    }


    // ========================================================
    // ENTER KEY
    // ========================================================

    if (chatInput) {

        chatInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendMessage();

                }

            }
        );

    }


    // ========================================================
    // QUICK BUTTONS
    // ========================================================

    document
        .querySelectorAll(".quick-chat-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    chatInput.value =
                        button.textContent.trim();

                    sendMessage();

                }
            );

        });


    // ========================================================
    // HERO SEARCH BUTTON
    // ========================================================

    const findHelpBtn =
        document.getElementById("findHelpBtn");

    const problemInput =
        document.getElementById("problemInput");


    if (findHelpBtn) {

        findHelpBtn.addEventListener(
            "click",
            function () {

                const problem =
                    problemInput.value.trim();

                if (!problem) {

                    alert(
                        "Please describe your problem first."
                    );

                    return;
                }

                const service =
                    findService(problem);

                if (service) {

                    showProviders(service);

                } else {

                    alert(
                        "Sajilo Sathi could not identify the service. Try describing the problem in more detail."
                    );

                }

            }
        );

    }


    // ========================================================
    // ESCAPE KEY
    // ========================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (modal) {
                    modal.style.display = "none";
                }

                if (chatWindow) {
                    chatWindow.classList.remove("active");
                }

            }

        }
    );


    // ========================================================
    // SUCCESS MESSAGE
    // ========================================================

    console.log(
        "✅ SmartFix + Sajilo Sathi loaded successfully!"
    );

});
