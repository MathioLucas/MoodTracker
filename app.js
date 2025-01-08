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
}







function getMoodData = () =>{
  const data = localstorage.getitem('moodData');
  return data ? JSON.parse(data) : {};


}
