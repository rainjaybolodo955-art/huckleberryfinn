// Dynamic Book Location database
const locationsData = [
    {
        title: "1. Pike County, MO",
        region: "Missouri",
        image: "img/pikecounty.jpg",
        narration: [
            "Huck's journey begins in this quiet fictional river town, modeled closely on Mark Twain's childhood town, Hannibal.",
            "The Widow Douglas and Miss Watson endeavor to educate Huck and 'sivilize' him through religion and school.",
            "Despite the comfortable living, Huck feels trapped by the town's social rules and hypocritical religious customs."
        ],
        significance: [
            "Establishes the novel's central theme of societal confinement versus the natural independence of the wilderness.",
            "Serves as the starting line where both Huck and the escaped slave Jim realize they must flee their respective forms of captivity."
        ]
    },
    {
        title: "2. St. Petersburg",
        region: "Illinois Shore",
        image: "img/peter.jpg",
        narration: [
            "Huck's abusive, alcoholic father, Pap, kidnaps him and locks him inside an isolated cabin in the dense woods.",
            "Pap violently rants against government, education, and black people while physically threatening Huck.",
            "Huck brilliantly fakes his own brutal murder by slaughtering a wild pig to cover his escape tracks."
        ],
        significance: [
            "Represents the absolute failure of legal guardianship and family structure in the antebellum South.",
            "The symbolic 'death' of Huck allows him to cast off his societal identity entirely to escape downriver."
        ]
    },
    {
        title: "3. Jackson's Island",
        region: "Mid-River Hideout",
        image: "img/jack.jpg",
        narration: [
            "Huck hides out on this uninhabited, wooded island where he unexpectedly crosses paths with Jim.",
            "Jim explains he fled when he learned Miss Watson planned to sell him south to New Orleans for $800.",
            "The two set up a camp in a deep cavern and explore the island together as partners."
        ],
        significance: [
            "Acts as a neutral sanctuary where the societal boundary between white boy and runaway slave temporarily dissolves.",
            "The setting where their pact of survival and companionship is cemented over campfire conversations."
        ]
    },
    {
        title: "4. Cairo, IL",
        region: "Wrecked Steamboat",
        image: "img/cairo.jpg",
        narration: [
            "During a fierce storm, Huck and Jim encounter a grounded, rotting steamship called the Walter Scott.",
            "Inside, Huck overhears a band of ruthless robbers plotting to execute one of their own partners.",
            "The raft breaks away, forcing Huck and Jim to steal the robbers' get-away skiff to survive."
        ],
        significance: [
            "The name 'Walter Scott' is Twain's satirical swipe at the romanticism of European-style chivalry in the South.",
            "Forces Huck to grapple with moral responsibility, as he goes out of his way to try to save the stranded crooks."
        ]
    },
    {
        title: "5. Grangerford Farm",
        region: "The Missed Junction",
        image: "img/farm.jpg",
        narration: [
            "This critical port marks the confluence where the Ohio River meets the muddy Mississippi.",
            "Under cover of a heavy fog, Huck and Jim lose track of their bearings and drift past the town in the night.",
            "Missing Cairo means they cannot sail up the Ohio River, which would have carried Jim safely into the Free States."
        ],
        significance: [
            "The plot's major turning point; by missing Cairo, their raft is forced deeper and deadlier into the slave-holding deep South.",
            "Exposes Huck's internal battle between his legal 'duty' to turn Jim in and his personal loyalty to his friend."
        ]
    },
    {
        title: "6. Pokeville Camp",
        region: "Kentucky Shore",
        image: "img/poke.jpg",
        narration: [
            "After a steamboat crashes into their raft, Huck climbs ashore and is taken in by the wealthy, aristocratic Grangerfords.",
            "He learns they are locked in a pointless, generational blood feud with the neighboring Shepherdson family.",
            "The feud explodes into a shootout that leaves Huck's young friend Buck dead, leaving Huck deeply traumatized."
        ],
        significance: [
            "A devastating critique of Southern aristocracy, exposing the brutal, hypocritical reality hidden behind 'polite' society.",
            "Contrasts the chaotic, blood-soaked violence of land life with the peaceful sanctuary of the river."
        ]
    },
    {
        title: "7. Bricksville, AR",
        region: "Religious Revival",
        image: "img/town.jpg",
        narration: [
            "Huck and Jim take on two fleeing con-men, who claim to be a 'Duke' and the rightful 'King of France'.",
            "At a rowdy religious camp meeting, the King scams the emotional crowd out of over $80 by pretending to be a reformed pirate.",
            "The scams force Huck and Jim to act as accomplices to the con-men's greedy exploitation."
        ],
        significance: [
            "Exposes the gullibility and moral blindspots of religious communities in the frontier.",
            "Highlights how easily human kindness and spiritual faith can be manipulated by charismatic frauds."
        ]
    },
    {
        title: "8. Wilks Estate",
        region: "Arkansas Shore",
        image: "img/river.jpg",
        narration: [
            "A run-down, muddy river town where Huck witnesses a cold-blooded murder when Colonel Sherburn shoots the harmless drunk, Boggs.",
            "A lawless lynch mob swarms Sherburn’s house, but he easily disperses them by mocking their cowardice from his porch.",
            "The Duke and King debut their highly deceptive 'Royal Nonesuch' show to swindle the local townsfolk."
        ],
        significance: [
            "Serves as one of the darkest, most realistic depictions of human cruelty and mob psychology in the novel.",
            "Sherburn's famous speech attacks the romanticized myth of Southern bravery, exposing the townspeople as cowards."
        ]
    },
    {
        title: "9. Pikesville (Phelps Farm)",
        region: "The Inheritance Scam",
        image: "img/pikesville.jpg",
        narration: [
            "The Duke and King pretend to be the British brothers of the late Peter Wilks to steal his family's inheritance.",
            "Huck grows fond of the orphaned Wilks daughters and decides he cannot let the con-men ruin their lives.",
            "He hides the stolen gold in the deceased man's coffin, ultimately orchestrating a dramatic escape."
        ],
        significance: [
            "Shows a major step in Huck's moral development, as he actively takes a stand to protect innocent victims from harm.",
            "The extreme greed of the Duke and King prepares Huck for his eventual break from them."
        ]
    },
    {
    title: "The Mississippi River",
    region: "United States Waterway",
    // Replace this URL with your preferred choice from above!
    image: "img/miss.jpg",
    narration: [
        "The grand, winding river is the physical highway and symbolic backbone of the entire novel.",
        "It is on the waters of the Mississippi that Huck and Jim build their raft, seeking an escape from their respective cages.",
        "On the river, they are free from social classifications, forming an equal partnership built on mutual survival."
    ],
    significance: [
        "Represents ultimate freedom, peaceful isolation, and the wild beauty of untouched nature.",
        "Contrasts sharply against the corruption, hypocrisy, and violence found on the dry shores of civilization."
    ]
}
];

// Document Selectors
const markers = document.querySelectorAll('.marker');
const riverPath = document.getElementById('riverTrigger');
const riverLabel = document.getElementById('riverLabelTrigger');
const detailsPanel = document.getElementById('detailsPanel');
const closeBtn = document.getElementById('closeBtn');

// Interactive Panel Content Bindings
const locationImage = document.getElementById('locationImage');
const locationTitle = document.getElementById('locationTitle');
const locationTag = document.getElementById('locationTag');
const narrationList = document.getElementById('narrationList');
const significanceList = document.getElementById('significanceList');

// Selection handler to activate map nodes and open sidebar
function selectLocation(index) {
    // Reset active styles from all elements
    markers.forEach(m => m.classList.remove('active'));
    riverPath.classList.remove('active');

    // Highlight clicked location
    if (index < 9) {
        markers[index].classList.add('active');
    } else {
        riverPath.classList.add('active');
    }

    // Populate data & slide open panel
    populatePanel(locationsData[index]);
    detailsPanel.classList.add('open');
}

// Click events for markers
markers.forEach(marker => {
    marker.addEventListener('click', () => {
        const index = parseInt(marker.getAttribute('data-index'));
        selectLocation(index);
    });
});

// Click event for the Mississippi River Path
riverPath.addEventListener('click', () => {
    selectLocation(9); // Coordinates to the 10th index "The Mississippi River"
});

// Click event for the Floating River Text
riverLabel.addEventListener('click', () => {
    selectLocation(9);
});

// Function to safely inject bullet points dynamically
function populatePanel(data) {
    locationImage.src = data.image;
    locationImage.alt = data.title;
    locationTitle.textContent = data.title;
    locationTag.textContent = data.region;

    // Flush out previous listings
    narrationList.innerHTML = "";
    significanceList.innerHTML = "";

    // Append narration list
    data.narration.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        narrationList.appendChild(li);
    });

    // Append significance list
    data.significance.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        significanceList.appendChild(li);
    });
}

// Close Panel Controls
closeBtn.addEventListener('click', () => {
    detailsPanel.classList.remove('open');
    markers.forEach(m => m.classList.remove('active'));
    riverPath.classList.remove('active');
}); 