AOS.init();

var typed = new Typed(".typing", {

    strings: [

        "AI Engineer",
        "Machine Learning Enthusiast",
        "Data Science Enthusiast",
        "Business Analyst",
        "Credit Risk Analyst",
        "SQL Developer",
        "Dashboard Developer"

    ],

    typeSpeed: 80,
    backSpeed: 50,
    loop: true

});

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00f7ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

    const navbar =
    document.getElementById("navbar");

    navbar.classList.toggle(

        "nav-scrolled",

        window.scrollY > 50

    );

});
/* =========================
   ADVANCED AI CHATBOT
========================= */

const chatbotButton =
document.getElementById("chatbotButton");

const chatWindow =
document.getElementById("chatWindow");

const closeChat =
document.getElementById("closeChat");

const startChat =
document.getElementById("startChat");

const emailScreen =
document.getElementById("emailScreen");

const chatContent =
document.getElementById("chatContent");

const visitorEmail =
document.getElementById("visitorEmail");

const sendMessageBtn =
document.getElementById("sendMessage");

const chatInput =
document.getElementById("chatInput");

const chatBody =
document.getElementById("chatBody");

/* OPEN CHAT */

chatbotButton.onclick = () => {

    chatWindow.classList.toggle("active");

}

/* CLOSE */

closeChat.onclick = () => {

    chatWindow.classList.remove("active");

}

/* START CHAT */

startChat.onclick = () => {

    const email =
    visitorEmail.value.trim();

    if(email === ""){

        alert("Please enter email");

        return;

    }

    emailScreen.style.display = "none";

    chatContent.style.display = "flex";

}

/* QUICK QUESTIONS */

function quickQuestion(text){

    chatInput.value = text;

    sendMessage();

}

/* SEND */

sendMessageBtn.onclick = sendMessage;

chatInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});

/* MAIN FUNCTION */

function sendMessage(){

    const message =
    chatInput.value.trim();

    if(message === "") return;

    addMessage(message, "user-message");

    chatInput.value = "";

    setTimeout(() => {

        botReply(message);

    }, 800);

}

/* ADD MESSAGE */

function addMessage(message, className){

    const div =
    document.createElement("div");

    div.className = className;

    div.innerHTML = message;

    chatBody.appendChild(div);

    chatBody.scrollTop =
    chatBody.scrollHeight;

}

/* AI RESPONSES */

function botReply(message){

    let response = "";

    const text =
    message.toLowerCase();

    if(text.includes("skills")){

        response =
        "Dumindu specializes in AI, Machine Learning, SQL Development, Power BI, Tableau, RPA Automation, Dashboard Development and Business Analysis.";

    }

    else if(text.includes("project")){

        response =
        "Main projects include AI Smart Energy Forecasting System, AI Sentiment Analysis Dashboard, SQL Reporting Systems and RPA Automation Solutions.";

    }

    else if(text.includes("experience")){

        response =
        "Dumindu has 9+ years experience in Banking, Finance, Credit Risk Analysis and Business Analysis.";

    }

    else if(text.includes("sql")){

        response =
        "Experienced in Oracle SQL, query optimization, database reporting, stored procedures and enterprise reporting systems.";

    }

    else if(text.includes("machine learning")){

        response =
        "Uses Random Forest, Regression, Isolation Forest and LightGBM models for forecasting and anomaly detection.";

    }

    else if(text.includes("contact")){

    response = `

    📧 Email:
    <br><br>
    
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=Dumindu834@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Dumindu,"
target="_blank"
style="
    color:#00f7ff;
    text-decoration:none;
    font-weight:bold;
">

Dumindu834@gmail.com

</a>

    <br><br>

    💼 LinkedIn:
    <br><br>

    <a href="https://www.linkedin.com/in/dumindu-wickramaarachchi-472872238/"
    target="_blank"
    style="
        color:#00f7ff;
        text-decoration:none;
        font-weight:bold;
    ">

    View LinkedIn Profile

    </a>

    <br><br>

    💻 GitHub:
    <br><br>

    <a href="https://github.com/Dumi96"
    target="_blank"
    style="
        color:#00f7ff;
        text-decoration:none;
        font-weight:bold;
    ">

    github.com/Dumi96

    </a>

    `;

}

    else if(text.includes("dashboard")){

        response =
        "Develops interactive dashboards using Power BI, Tableau, Python and real-time analytics.";

    }

    else{

        response =
        "I can help you explore Dumindu's skills, projects, experience, AI solutions, SQL expertise and dashboards.";

    }

    addMessage(response, "bot-message");

}