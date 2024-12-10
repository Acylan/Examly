function openSubject(a) {
    let main = document.querySelector(".main");
    let subject = document.querySelector(".subject");
    main.classList.toggle("close");
    subject.classList.toggle("close");
    let description = document.querySelector(".subject-description")
    let newSubject = document.createElement("h1");
    let newFunction = document.createElement("h1");
    newSubject.textContent = "Edexcel IGCSE " + a + ":";
    newFunction.textContent = " Past paper generator";
    description.textContent = "";
    description.appendChild(newSubject);
    description.appendChild(newFunction);
}

function openTopics() {
    let general = document.querySelector(".choose-topics");
    let arrow = document.querySelector(".arrow");
    let chooseTopics = document.querySelector(".open-topics");
    let topics = document.querySelectorAll(".topics");
    general.classList.toggle("open");
    arrow.classList.toggle("rotate");
    topics.forEach(function(topic) {
        topic.classList.toggle("open");
    });
    chooseTopics.classList.toggle("open");

}

function includeTopic(x) {


    let vertical = document.querySelectorAll(".vertical-topic");
    let horizontal = document.querySelectorAll(".horizontal-topic");
    let add = document.querySelectorAll(".add-topic");
    let allSubtopics = document.querySelectorAll(".sub-topics");
    let subtopics = allSubtopics[x].querySelectorAll(".sub-topic");

    // Toggle main topic animation and class
    vertical[x].classList.toggle("bigger");
    horizontal[x].classList.toggle("bigger");
    add[x].classList.toggle("bigger");
    add[x].classList.toggle("green");

    // Animate main topic, reset after 500ms
    setTimeout(function () {
        vertical[x].classList.toggle("bigger");
        horizontal[x].classList.toggle("bigger");
        add[x].classList.toggle("bigger");
        vertical[x].classList.toggle("close");
    }, 500);

    // Check if the main topic is toggled "on" (green)
    if (add[x].classList.contains("green")) {
        // Add subtopics to content and append
        for (let i = 0; i < subtopics.length; i++) {
            let current = document.querySelector(".current-topics");
    
            // Generate a unique ID for the subtopic
            let subtopicId = "topic-" + x + "-subtopic-" + i;
    
            // Check if the subtopic already exists
            let content = document.querySelector('[data-id="' + subtopicId + '"]');
            if (!content) {
                // Create a new <p> for the subtopic if it doesn't exist
                content = document.createElement("p");
                content.setAttribute("data-id", subtopicId); // Assign the unique ID
            }
    
            // Toggle animations for subtopics
            let verticalSubtopic = subtopics[i].querySelector(".vertical-subtopic");
            let horizontalSubtopic = subtopics[i].querySelector(".horizontal-subtopic");
            let addSubtopic = subtopics[i].querySelector(".add-subtopic");
    
            addSubtopic.classList.remove("green");
            addSubtopic.classList.remove("bigger");
            verticalSubtopic.classList.remove("bigger");
            horizontalSubtopic.classList.remove("bigger");
            addSubtopic.classList.toggle("green");
            addSubtopic.classList.toggle("bigger");
            verticalSubtopic.classList.toggle("bigger");
            horizontalSubtopic.classList.toggle("bigger");
    
            // Add subtopic text to the <p> element
            let subtopicText = subtopics[i].textContent.trim();
            content.textContent = "~" + subtopicText; // Add subtopic text
    
            // Append the subtopic <p> to the current topics container
            current.appendChild(content);
        }
    } else {
        // If the main topic is untoggled, remove all its subtopics
        for (let i = 0; i < subtopics.length; i++) {
            let subtopicId = "topic-" + x + "-subtopic-" + i; // Match the subtopic ID
            let content = document.querySelector('[data-id="' + subtopicId + '"]');
            if (content) {
                content.remove(); // Remove the specific <p> for the subtopic
            }
            for (let i = 0; i < subtopics.length; i++) {
                let verticalSubtopic = subtopics[i].querySelector(".vertical-subtopic");
                let horizontalSubtopic = subtopics[i].querySelector(".horizontal-subtopic");
                let addSubtopic = subtopics[i].querySelector(".add-subtopic");
    
                if (addSubtopic && verticalSubtopic && horizontalSubtopic) {
                    addSubtopic.classList.remove("green");
                    addSubtopic.classList.remove("bigger");
                    verticalSubtopic.classList.remove("bigger");
                    horizontalSubtopic.classList.remove("bigger");
                }
            }
        }
    }

}

function openSubtopics(x) {
    let subTopics = document.querySelectorAll(".sub-topics");
    let arrows = document.querySelectorAll(".arrow-subtopic");

    // Close all other sub-topics except the clicked one
    for (let i = 0; i < subTopics.length; i++) {
        if (i !== x) {
            subTopics[i].classList.remove("open");
            arrows[i].classList.remove("open");
        }
    }
    // Toggle the selected sub-topic
    subTopics[x].classList.toggle("open");
    arrows[x].classList.toggle("open");
}

function includeSubtopic(x, y) {
    let current = document.querySelector(".current-topics");

    // Generate the unique ID for the subtopic
    let subtopicId = "topic-" + x + "-subtopic-" + y;

    // Check if the subtopic is already in the list
    let content = document.querySelector('[data-id="' + subtopicId + '"]');
    if (!content) {
        // Create a new <p> for the subtopic if it doesn't exist
        content = document.createElement("p");
        content.setAttribute("data-id", subtopicId); // Assign the unique ID

        // Get the subtopic text
        let subtopics = document.querySelectorAll(".topics")[x].querySelectorAll(".sub-topic");
        let subtopicText = subtopics[y].textContent.trim();

        // Add text to the <p>
        content.textContent = "~" + subtopicText;

        // Append the subtopic to the current topics container
        current.appendChild(content);
    } else {
        // If the subtopic already exists, remove it (untoggle)
        content.remove();
    }

    // Toggle animations for the specific subtopic
    let subtopics = document.querySelectorAll(".topics")[x]
    let subtopic = subtopics.querySelectorAll(".sub-topic")[y];
    let verticalSubtopic = subtopic.querySelector(".vertical-subtopic");
    let horizontalSubtopic = subtopic.querySelector(".horizontal-subtopic");
    let addSubtopic = subtopic.querySelector(".add-subtopic");

    addSubtopic.classList.toggle("green");
    addSubtopic.classList.toggle("bigger");
    verticalSubtopic.classList.toggle("bigger");
    horizontalSubtopic.classList.toggle("bigger");

    checkAllSubtopics(x)
}

function checkAllSubtopics(topicIndex) {
    // Get the topic and its subtopics
    let topic = document.querySelectorAll(".topics")[topicIndex];
    let subtopics = topic.querySelectorAll(".sub-topic");

    // Get the main topic's "add" button (used to toggle the topic)
    let addButton = topic.querySelector(".add-topic");
    let vertical = topic.querySelector(".vertical-topic")
    let horizontal = topic.querySelector(".horizontal-topic")

    // Check if all subtopics are "checked" (class "green" for example)
    let allChecked = true;
    for (let i = 0; i < subtopics.length; i++) {
        let addSubtopic = subtopics[i].querySelector(".add-subtopic");
        if (!addSubtopic.classList.contains("green")) {
            allChecked = false; // If any subtopic is not checked, set flag to false
            break;
        }
    }

    // Update the main topic based on the result
    if (allChecked) {
        addButton.classList.add("green"); // Mark the topic as selected
        vertical.classList.add("bigger");
        horizontal.classList.add("bigger");
        addButton.classList.add("bigger");
    
        // Animate main topic, reset after 500ms
        setTimeout(function () {
            vertical.classList.toggle("bigger");
            horizontal.classList.toggle("bigger");
            addButton.classList.toggle("bigger");
            vertical.classList.toggle("close");
        }, 500);

    } else {

        addButton.classList.remove("green"); // Unmark the topic
        vertical.classList.remove("close")
    }
    }