// Navigation between sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-btn');
    
    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

// Project Modal Functions
function openModal() {
    document.getElementById('projectModal').classList.add('active');
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.getElementById('projectForm').reset();
}

// Insight Modal Functions
function openInsightModal() {
    document.getElementById('insightModal').classList.add('active');
}

function closeInsightModal() {
    document.getElementById('insightModal').classList.remove('active');
    document.getElementById('insightForm').reset();
    document.getElementById('chartPreviewContainer').innerHTML = '';
    uploadedCharts = [];
}

// Chart Upload Management
let uploadedCharts = [];

const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('insightCharts');
const previewContainer = document.getElementById('chartPreviewContainer');

uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const chartData = {
                    src: e.target.result,
                    name: file.name
                };
                uploadedCharts.push(chartData);
                addChartPreview(chartData, uploadedCharts.length - 1);
            };
            reader.readAsDataURL(file);
        } else {
            alert('File harus berupa gambar dan maksimal 5MB');
        }
    });
}

function addChartPreview(chartData, index) {
    const preview = document.createElement('div');
    preview.className = 'chart-preview';
    preview.innerHTML = `
        <img src="${chartData.src}" alt="${chartData.name}">
        <button class="remove-chart" onclick="removeChart(${index})" type="button">×</button>
    `;
    previewContainer.appendChild(preview);
}

function removeChart(index) {
    uploadedCharts.splice(index, 1);
    previewContainer.innerHTML = '';
    uploadedCharts.forEach((chart, i) => {
        addChartPreview(chart, i);
    });
}

// Project Form Submit
document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('projectTitle').value;
    const desc = document.getElementById('projectDesc').value;
    const tools = document.getElementById('projectTools').value;
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <p style="margin-top: 10px; color: #667eea; font-weight: bold;">Tools: ${tools}</p>
    `;
    
    document.getElementById('projectGrid').appendChild(projectCard);
    closeModal();
});

// Insight Form Submit
document.getElementById('insightForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('insightTitle').value;
    const date = document.getElementById('insightDate').value;
    const category = document.getElementById('insightCategory').value;
    const summary = document.getElementById('insightSummary').value;
    const findings = document.getElementById('insightFindings').value.split('\n').filter(f => f.trim());
    const recommendations = document.getElementById('insightRecommendations').value.split('\n').filter(r => r.trim());
    
    const findingsHTML = findings.map(f => `<li>${f}</li>`).join('');
    const recommendationsHTML = recommendations.map(r => `<li>${r}</li>`).join('');
    
    // Generate chart section HTML
    let chartSectionHTML = '';
    if (uploadedCharts.length > 0) {
        const chartsHTML = uploadedCharts.map(chart => `
            <div class="chart-card">
                <img src="${chart.src}" alt="Chart" class="chart-image">
                <div class="chart-title">Grafik Analisis</div>
                <div class="chart-description">
                    Visualisasi data untuk mendukung insight dan findings.
                </div>
            </div>
        `).join('');
        
        chartSectionHTML = `
            <div class="chart-section">
                <h4 style="color: #667eea; margin-bottom: 15px;">📈 Data Visualization & Analysis</h4>
                <div class="chart-grid">
                    ${chartsHTML}
                </div>
            </div>
        `;
    }
    
    const insightCard = document.createElement('div');
    insightCard.className = 'insight-card';
    insightCard.innerHTML = `
        <div class="insight-header">
            <div>
                <h3 class="insight-title">${title}</h3>
            </div>
            <div class="insight-meta">
                <span class="meta-badge">📅 ${date}</span>
                <span class="meta-badge">🏢 ${category}</span>
            </div>
        </div>

        <div class="insight-section">
            <h4>📊 Executive Summary</h4>
            <p>${summary}</p>
        </div>

        ${chartSectionHTML}

        <div class="key-findings">
            <h4>🔍 Key Findings:</h4>
            <ul>${findingsHTML}</ul>
        </div>

        <div class="recommendation-box">
            <h4>💡 Rekomendasi Aksi</h4>
            <ul>${recommendationsHTML}</ul>
        </div>
    `;
    
    const insightsSection = document.getElementById('insights');
    const addButton = insightsSection.querySelector('.add-insight-btn');
    insightsSection.insertBefore(insightCard, addButton);
    
    closeInsightModal();
});

// Close modal when clicking outside
window.onclick = function(event) {
    const projectModal = document.getElementById('projectModal');
    const insightModal = document.getElementById('insightModal');
    if (event.target == projectModal) {
        closeModal();
    }
    if (event.target == insightModal) {
        closeInsightModal();
    }
}
