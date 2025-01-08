function getMoodData = () =>{
  const data = localstorage.getitem('moodData');
  return data ? JSON.parse(data) : {};


}
