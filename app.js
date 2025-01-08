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


  
  const secondDay = 


}







function getMoodData = () =>{
  const data = localstorage.getitem('moodData');
  return data ? JSON.parse(data) : {};


}
