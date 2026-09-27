const data = {
    "Andhra Pradesh": {
        "Guntur": ["Amaravati", "Mangalagiri"],
        "Krishna": ["Vijayawada Rural", "Gudivada"],
        "Palnadu": ["Narasaraopet", "Sattenapalli"]
    },
    "Gujarat": {
        "Ahmedabad": ["Sanand", "Dholka"],
        "Gandhinagar": ["Kalol", "Mansa"]
    },
    "Telangana": {
        "Hyderabad": ["Shamirpet", "Moinabad"],
        "Warangal": ["Parkal", "Narsampet"]
    }
};

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    let page = document.getElementById(pageId);

    if (!page) {
        createMissingPage(pageId);
        page = document.getElementById(pageId);
    }

    if (page) {
        page.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.getElementById("navLinks")?.classList.remove("show");
}

function toggleMenu() {
    document.getElementById("navLinks")?.classList.toggle("show");
}

function loadStates() {
    const stateSelect = document.getElementById("stateSelect");

    if (!stateSelect) return;

    stateSelect.innerHTML =
        '<option value="">Select State</option>';

    Object.keys(data).forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

function loadDistricts() {
    const state = document.getElementById("stateSelect").value;
    const districtSelect = document.getElementById("districtSelect");
    const villageSelect = document.getElementById("villageSelect");

    districtSelect.innerHTML =
        '<option value="">Select District</option>';

    villageSelect.innerHTML =
        '<option value="">Select Village</option>';

    districtSelect.disabled = true;
    villageSelect.disabled = true;

    if (!state) return;

    Object.keys(data[state]).forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });

    districtSelect.disabled = false;
}

function loadVillages() {
    const state = document.getElementById("stateSelect").value;
    const district = document.getElementById("districtSelect").value;
    const villageSelect = document.getElementById("villageSelect");

    villageSelect.innerHTML =
        '<option value="">Select Village</option>';

    villageSelect.disabled = true;

    if (!state || !district) return;

    data[state][district].forEach(village => {
        const option = document.createElement("option");
        option.value = village;
        option.textContent = village;
        villageSelect.appendChild(option);
    });

    villageSelect.disabled = false;
}

function showVillageDashboard() {
    const state = document.getElementById("stateSelect").value;
    const district = document.getElementById("districtSelect").value;
    const village = document.getElementById("villageSelect").value;

    if (!state || !district || !village) {
        alert("Please select State, District and Village.");
        return;
    }

    const dashboard = document.getElementById("villageDashboard");

    if (dashboard) {
        dashboard.style.display = "block";
    }

    const name = document.getElementById("selectedVillageName");
    const location = document.getElementById("selectedVillageLocation");
    const allocated = document.getElementById("allocatedAmount");
    const released = document.getElementById("releasedAmount");
    const utilized = document.getElementById("utilizedAmount");

    if (name) name.textContent = village;

    if (location) {
        location.textContent = district + ", " + state;
    }

    if (allocated) allocated.textContent = "₹25 Lakh";
    if (released) released.textContent = "₹20 Lakh";
    if (utilized) utilized.textContent = "₹17 Lakh";
}

const translations = {
    en: {
        home: "🏠 Home",
        explore: "🔎 Explore Village",
        report: "⚠️ Report Problem",
        track: "📋 Track Complaint",
        government: "🏛️ Government Portal",
        exploreVillage: "🔎 Explore My Village",
        reportProblem: "⚠️ Report a Problem",
        heroTitle1: "See Rural Development.",
        heroTitle2: "Track Every Rupee.",
        heroDescription: "A transparent digital platform where citizens and government can see rural development, track funds, monitor projects and safely report problems.",
        howWorks: "How GramLens Works",
        howWorksDesc: "One transparent platform connecting citizens, rural development data and government monitoring.",
        builtFor: "Built for Citizens and Government",
        builtForDesc: "GramLens creates a shared view of rural development while protecting citizen privacy.",
        exploreYourVillage: "🔎 Explore Your Village",
        selectLocation: "Select your location to see rural development, funds and projects.",
        state: "State",
        district: "District",
        village: "Village",
        viewDevelopment: "View Rural Development"
    },

    te: {
        home: "🏠 హోమ్",
        explore: "🔎 గ్రామాన్ని చూడండి",
        report: "⚠️ సమస్యను నివేదించండి",
        track: "📋 ఫిర్యాదును ట్రాక్ చేయండి",
        government: "🏛️ ప్రభుత్వ పోర్టల్",
        exploreVillage: "🔎 నా గ్రామాన్ని చూడండి",
        reportProblem: "⚠️ సమస్యను నివేదించండి",
        heroTitle1: "గ్రామీణ అభివృద్ధిని చూడండి.",
        heroTitle2: "ప్రతి రూపాయిని ట్రాక్ చేయండి.",
        howWorks: "GramLens ఎలా పనిచేస్తుంది",
        state: "రాష్ట్రం",
        district: "జిల్లా",
        village: "గ్రామం",
        viewDevelopment: "గ్రామీణ అభివృద్ధిని చూడండి"
    },

    hi: {
        home: "🏠 होम",
        explore: "🔎 गाँव देखें",
        report: "⚠️ समस्या रिपोर्ट करें",
        track: "📋 शिकायत ट्रैक करें",
        government: "🏛️ सरकारी पोर्टल",
        exploreVillage: "🔎 मेरा गाँव देखें",
        reportProblem: "⚠️ समस्या रिपोर्ट करें",
        heroTitle1: "ग्रामीण विकास देखें।",
        heroTitle2: "हर रुपये को ट्रैक करें।",
        howWorks: "GramLens कैसे काम करता है",
        state: "राज्य",
        district: "जिला",
        village: "गाँव",
        viewDevelopment: "ग्रामीण विकास देखें"
    },

    gu: {
        home: "🏠 હોમ",
        explore: "🔎 ગામ જુઓ",
        report: "⚠️ સમસ્યા નોંધાવો",
        track: "📋 ફરિયાદ ટ્રેક કરો",
        government: "🏛️ સરકારી પોર્ટલ",
        exploreVillage: "🔎 મારું ગામ જુઓ",
        reportProblem: "⚠️ સમસ્યા નોંધાવો",
        heroTitle1: "ગ્રામ્ય વિકાસ જુઓ.",
        heroTitle2: "દરેક રૂપિયાને ટ્રેક કરો.",
        howWorks: "GramLens કેવી રીતે કામ કરે છે",
        state: "રાજ્ય",
        district: "જિલ્લો",
        village: "ગામ",
        viewDevelopment: "ગ્રામ્ય વિકાસ જુઓ"
    }
};

function changeLanguage(language) {
    const languageData = translations[language];

    if (!languageData) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (languageData[key]) {
            element.textContent = languageData[key];
        }
    });
}

function createMissingPage(pageId) {

    if (pageId === "report") {
        const section = document.createElement("section");

        section.className = "page";
        section.id = "report";

        section.innerHTML = `
            <div class="container">

                <div class="section-title">
                    <h2>⚠️ Report a Problem</h2>
                    <p>Report a rural development problem safely.</p>
                </div>

                <div class="report-card">

                    <div class="privacy-box">
                        🔒 Your information will be used only for
                        processing the complaint.
                    </div>

                    <div class="form-group">
                        <label>Name</label>
                        <input id="reportName" type="text"
                        placeholder="Enter your name">
                    </div>

                    <div class="form-group">
                        <label>Problem Type</label>

                        <select id="problemType">
                            <option value="">Select Problem</option>
                            <option>Road Problem</option>
                            <option>Water Problem</option>
                            <option>School Problem</option>
                            <option>Hospital Problem</option>
                            <option>Agriculture Problem</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Description</label>

                        <textarea id="reportDescription"
                        placeholder="Describe the problem"></textarea>
                    </div>

                    <div class="form-group">
                        <label>Photo Evidence</label>

                        <div class="file-upload">
                            <input id="reportFile" type="file"
                            accept="image/*">
                        </div>
                    </div>

                    <button class="btn btn-red"
                    onclick="submitComplaint()">
                        Submit Complaint
                    </button>

                </div>
            </div>
        `;

        document.body.appendChild(section);
    }

    if (pageId === "track") {
        const section = document.createElement("section");

        section.className = "page";
        section.id = "track";

        section.innerHTML = `
            <div class="container">

                <div class="section-title">
                    <h2>📋 Track Complaint</h2>
                    <p>Enter your complaint reference number.</p>
                </div>

                <div class="track-box">

                    <div class="form-group">
                        <label>Complaint Reference</label>

                        <input id="complaintId"
                        placeholder="Example: GL123456">
                    </div>

                    <button class="btn btn-blue"
                    onclick="trackComplaint()">
                        Track Complaint
                    </button>

                    <div id="complaintResult"
                    class="complaint-result">
                    </div>

                </div>
            </div>
        `;

        document.body.appendChild(section);
    }

    if (pageId === "officer") {
        const section = document.createElement("section");

        section.className = "page";
        section.id = "officer";

        section.innerHTML = `
            <div class="container">

                <div class="section-title">
                    <h2>🏛️ Government Portal</h2>
                    <p>Government officer login and monitoring dashboard.</p>
                </div>

                <div class="login-box" id="officerLogin">

                    <div class="login-icon">🏛️</div>

                    <h2 style="text-align:center;margin-bottom:20px;">
                        Officer Login
                    </h2>

                    <div class="form-group">
                        <label>Username</label>
                        <input id="officerUsername"
                        placeholder="Enter username">
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input id="officerPassword"
                        type="password"
                        placeholder="Enter password">
                    </div>

                    <button class="btn btn-green"
                    style="width:100%;"
                    onclick="officerLogin()">
                        Login
                    </button>

                </div>

                <div class="officer-dashboard"
                id="officerDashboard">

                    <div class="officer-top">
                        <h1>Government Monitoring Dashboard</h1>
                        <p>GramLens Rural Development Portal</p>
                    </div>

                    <div class="officer-container">

                        <div class="officer-stats">

                            <div class="officer-card">
                                <small>Total Villages</small>
                                <h2>128</h2>
                            </div>

                            <div class="officer-card">
                                <small>Active Projects</small>
                                <h2>46</h2>
                            </div>

                            <div class="officer-card">
                                <small>Complaints</small>
                                <h2>23</h2>
                            </div>

                            <div class="officer-card">
                                <small>Completed Projects</small>
                                <h2>82</h2>
                            </div>

                        </div>

                        <div class="officer-panels">

                            <div class="panel">

                                <h3>Recent Complaints</h3>

                                <table>
                                    <tr>
                                        <th>Complaint</th>
                                        <th>Village</th>
                                        <th>Status</th>
                                    </tr>

                                    <tr>
                                        <td>Road Damage</td>
                                        <td>Amaravati</td>
                                        <td>
                                            <span class="status status-progress">
                                                In Progress
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Water Supply</td>
                                        <td>Mangalagiri</td>
                                        <td>
                                            <span class="status status-pending">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>

                                </table>

                            </div>

                            <div class="panel">

                                <h3>System Status</h3>

                                <p>🟢 Data System: Active</p>
                                <br>
                                <p>🟢 Complaint System: Active</p>
                                <br>
                                <p>🟢 Monitoring: Active</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        `;

        document.body.appendChild(section);
    }
}

function submitComplaint() {

    const name = document.getElementById("reportName")?.value.trim();
    const type = document.getElementById("problemType")?.value;
    const description =
        document.getElementById("reportDescription")?.value.trim();

    if (!name || !type || !description) {
        alert("Please fill all required fields.");
        return;
    }

    const id =
        "GL" + Math.floor(100000 + Math.random() * 900000);

    const complaint = {
        id: id,
        name: name,
        type: type,
        description: description,
        status: "Submitted"
    };

    localStorage.setItem(
        "complaint_" + id,
        JSON.stringify(complaint)
    );

    alert(
        "Complaint submitted successfully!\n\nReference ID: " + id
    );

    showPage("track");

    const input = document.getElementById("complaintId");

    if (input) {
        input.value = id;
    }

    trackComplaint();
}

function trackComplaint() {

    const input = document.getElementById("complaintId");

    if (!input) return;

    const id = input.value.trim().toUpperCase();

    if (!id) {
        alert("Please enter a complaint reference number.");
        return;
    }

    const result = document.getElementById("complaintResult");

    const saved =
        localStorage.getItem("complaint_" + id);

    if (!saved) {

        result.style.display = "block";

        result.innerHTML = `
            <h3>Complaint Not Found</h3>
            <p>Please check your reference number.</p>
        `;

        return;
    }

    const complaint = JSON.parse(saved);

    result.style.display = "block";

    result.innerHTML = `
        <h3>Complaint Details</h3>

        <p><strong>Reference:</strong> ${complaint.id}</p>

        <p><strong>Problem:</strong> ${complaint.type}</p>

        <p><strong>Description:</strong>
        ${complaint.description}</p>

        <div class="timeline">

            <div class="timeline-item">

                <div class="timeline-dot"></div>

                <h4>Complaint Submitted</h4>

                <p>Your complaint has been received.</p>

            </div>

            <div class="timeline-item">

                <div class="timeline-dot"></div>

                <h4>Under Review</h4>

                <p>Government authorities can review the complaint.</p>

            </div>

        </div>
    `;
}

function officerLogin() {

    const username =
        document.getElementById("officerUsername").value.trim();

    const password =
        document.getElementById("officerPassword").value.trim();

    if (!username || !password) {
        alert("Please enter username and password.");
        return;
    }

    document.getElementById("officerLogin").style.display = "none";

    document.getElementById("officerDashboard").style.display =
        "block";
}

document.addEventListener("DOMContentLoaded", () => {

    loadStates();

    /*
       Create the three pages if they are not already
       present in your HTML.
    */

    if (!document.getElementById("report")) {
        createMissingPage("report");
    }

    if (!document.getElementById("track")) {
        createMissingPage("track");
    }

    if (!document.getElementById("officer")) {
        createMissingPage("officer");
    }

});