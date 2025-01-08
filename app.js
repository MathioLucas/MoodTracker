const moodColors = {
  happy: '#FFD700',
  excited:'#FF69B4',
  neutral:'#A9A9A9',
  sad:'#4682B4',
  angry:'#FF6347'
  }

let currenaDate = new Date()
let selctedDate = new Date()

const moodData = json.parse(localstorage.getitem('moodData')) || {};

function saveMoodData () {
  const firstDay = new Date (currentDate.getFullYear(), currentDate.getmonth (), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startingDay = firstDay.getDay();

  document.getElementById('monthYear').textContent = 
        firstDay.toLocaleString('default', { month: 'long', year: 'numeric' });
  const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';


  for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        calendarGrid.appendChild(emptyDay);
    }
  or (let day = 1; day <= lastDay.getDate(); day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'calendar-day';
        
        const dateStr = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
            .toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        
        dateCell.innerHTML = `
            ${day}
            ${moodData[dateStr] ? 
                `<div class="mood-indicator" style="background-color: ${moodColors[moodData[dateStr].mood]}"></div>` 
                : ''}
        `;

        if (moodData[dateStr]?.note) {
            dateCell.title = moodData[dateStr].note;
        }

        dateCell.addEventListener('click', () => {
            selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            updateSelectedDate();
        });

        calendarGrid.appendChild(dateCell);
    }

    updateStats();
}

function updateSelectedDate() {
    const dateStr = selectedDate.toISOString().split('T')[0];
    if (moodData[dateStr]) {
        document.getElementById('moodNote').value = moodData[dateStr].note || '';
    } else {
        document.getElementById('moodNote').value = '';
    }
}

function updateStats() {
    const moodCounts = {};
    let totalMoods = 0;

    Object.values(moodData).forEach(data => {
        moodCounts[data.mood] = (moodCounts[data.mood] || 0) + 1;
        totalMoods++;
    });

    const statsHtml = Object.entries(moodCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([mood, count]) => {
            const percentage = (count / totalMoods * 100).toFixed(1);
            return `
                <div class="stat-bar">
                    <span class="stat-label">${mood}</span>
                    <div class="stat-value" style="width: ${percentage}%; background-color: ${moodColors[mood]}"></div>
                    <span style="margin-left: 10px">${percentage}%</span>
                </div>
            `;
        })
        .join('');

    document.getElementById('moodStats').innerHTML = `
        <p>Total entries: ${totalMoods}</p>
        ${statsHtml}
    `;
}

// Event Listeners
document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const dateStr = selectedDate.toISOString().split('T')[0];
        const mood = btn.dataset.mood;
        const note = document.getElementById('moodNote').value;

        moodData[dateStr] = { mood, note };
        saveMoodData();
        updateCalendar();
    });
});

document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

document.getElementById('moodNote').addEventListener('change', () => {
    const dateStr = selectedDate.toISOString().split('T')[0];
    if (moodData[dateStr]) {
        moodData[dateStr].note = document.getElementById('moodNote').value;
        saveMoodData();
    }
});

// Initializing the calendar
updateCalendar();
updateSelectedDate();



  



}







function getMoodData = () =>{
  const data = localstorage.getitem('moodData');
  return data ? JSON.parse(data) : {};


}
