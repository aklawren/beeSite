document.getElementById("nextMeeting").innerHTML = getNextMeeting();

function getNextMeeting(){
   const JANUARY = 0;
   const DECEMBER = 11;

   var today = new Date();
   var year = today.getFullYear();
   var month = today.getMonth();
   var date = today.getDate();
   var day = today.getDay();

   var thirdWednesday = getThirdWednesday(year, month);

   if(date <= thirdWednesday){
     return formattedNextMeeting(year, month, date);
   }
   else{
      //if there is a month left in this year
      if(month < DECEMBER){
        month = month+1;
        date = getThirdWednesday(year, month);
        return formattedNextMeeting(year, month, date);
      }
      //else, go to jan of next year
      else{
        year = year+1;
        date = getThirdWednesday(year, JANUARY);
        return formattedNextMeeting(year, month, date);
      }
   }
}

function formattedNextMeeting(year, month, date){
  var date = new Date(year, month, date);
  return date.toLocaleDateString('en-US', {"month": "long", "day": "numeric", "year": "numeric"});
}

function getThirdWednesday(year, month){
  //determine first day of the month
  var firstDay = new Date(year, month).getDay();

  //determine first wednesday of the month
  var firstWednesday;

  switch (firstDay){
    case 3:
       firstWednesday = 1;
       break;
    case 2:
       firstWednesday = 2;
       break;
    case 1:
       firstWednesday = 3;
       break;
    case 0:
       firstWednesday = 4;
       break;
    case 6:
       firstWednesday = 5;
       break;
    case 5:
       firstWednesday = 6;
       break;
    case 4:
       firstWednesday = 7;
       break;
  }
   //determine date of third Wednesday
   return firstWednesday + 14;

}

function changeTabs(elementId, contentId ){
  var tabs = document.getElementsByClassName('tab');
  for (let tab of tabs){
     tab.classList.remove('selected');
  }
  var tab = document.getElementById(elementId);
  tab.classList.toggle('selected');

  var contents = document.getElementsByClassName('content-pane');
  for (let content of contents){
    content.classList.add('hidden');
  }
  var content = document.getElementById(contentId);
  content.classList.toggle('hidden');


}
