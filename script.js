// ===============================
// SAT Score Predictor Pro v2.0
// Developed by Ashraful Ferdous Rafsun
// ===============================

function calculateSAT() {

    const mathInput = document.getElementById("math");
    const readingInput = document.getElementById("reading");

    const math = Number(mathInput.value);
    const reading = Number(readingInput.value);

    // Validation
    if (!math || !reading) {
        alert("Please enter both Math and Reading & Writing scores.");
        return;
    }

    if (math < 200 || math > 800) {
        alert("Math score must be between 200 and 800.");
        return;
    }

    if (reading < 200 || reading > 800) {
        alert("Reading & Writing score must be between 200 and 800.");
        return;
    }

    const total = math + reading;

    let performance = "";
    let color = "";
    let percentile = "";

    if (total >= 1550) {
        performance = "🌟 Excellent";
        color = "#16a34a";
        percentile = "99th Percentile";
    }
    else if (total >= 1500) {
        performance = "🚀 Highly Competitive";
        color = "#2563eb";
        percentile = "98th Percentile";
    }
    else if (total >= 1450) {
        performance = "🏆 Highly Competitive";
        color = "#2563eb";
        percentile = "97th Percentile";
    }
    else if (total >= 1400) {
        performance = "✅ Competitive";
        color = "#ca8a04";
        percentile = "95th Percentile";
    }
    else if (total >= 1300) {
        performance = "👍 Competitive";
        color = "#ca8a04";
        percentile = "90th Percentile";
    }
    else if (total >= 1200) {
        performance = "📘 Good";
        color = "#ea580c";
        percentile = "80th Percentile";
    }
    else if (total >= 1000) {
        performance = "📚 Average";
        color = "#dc2626";
        percentile = "60th Percentile";
    }
    else {
        performance = "⚠ Needs Improvement";
        color = "#dc2626";
        percentile = "Below 60th Percentile";
    }

    // Update Dashboard
    document.getElementById("totalScore").textContent = total + " / 1600";
    document.getElementById("mathScore").textContent = math;
    document.getElementById("readingScore").textContent = reading;

    document.getElementById("performance").innerHTML =
        `<span style="color:${color};font-weight:bold;">${performance}</span>`;

    document.getElementById("percentile").textContent = percentile;

    // Progress Bar
    const progress = (total / 1600) * 100;
    document.getElementById("progressFill").style.width = progress + "%";
}
