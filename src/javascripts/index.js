let today = new Date();//今日の日付取得
let year = today.getFullYear();//年取得
let month = today.getMonth() + 1;//月取得

const init = (y, n) => {
  const weekDay = ['日', '月', '火', '水', '木', '金', '土'];
  //月初（1日）取得
  const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
  const firstDay = new Date(year, month, 0);
  const firstDate = firstDay.setDate(1);
  //月末の日付取得
  const lastDay = new Date(year, month, 0);
  const lastDate = lastDay.getDate();
  // 月初の曜日取得
  const startDay = firstDay.getDay() ;
  let dayCount = 1;
  let calenderHtml = '';
  // 現在年月出力
  calenderHtml += '<h2 class="now">'+year+'年'+month+'月'+'</h2>';
  calenderHtml += '<table class="calender_table">';
  calenderHtml += '<tr class="calender_low">';
  // 曜日の出力
  let day = [];
  for (let i = 0; i < weekDay.length; i++) {
    calenderHtml += '<th class="day">'+ weekDay[i] +'</th>';
  }
  calenderHtml += '</tr>';
  // 日付出力
  for (let i = 0; i < 6; i++) {
    calenderHtml += '<tr class="calender_low">';
    for (let d = 0; d <= 6; d++) {
      if (i == 0 && d < startDay) {
        calenderHtml += '<td class="date"></td>';
      }else if(dayCount > lastDay.getDate()){
        calenderHtml += '<td class="date"></td>';
      }else{
        calenderHtml += '<td class="date">' + dayCount + '</td>';
        dayCount ++;
      }
    }
    calenderHtml += '</tr>';
  }
  calenderHtml += '</table>';
  document.getElementById('calender').innerHTML = calenderHtml;
}
// 読み込み時の処理
window.onload = () => {
  init();
}
// 前の月、次の月がクリックされた時の処理
function moveCalendar(e) {
  document.querySelector('#calender').innerHTML = '';
  if (e.target.id == 'prev') {
    month --;
    if (month < 1) {
      year --;
      month = 12;
    }
  }
  if (e.target.id == 'next') {
    month ++;
    if(month > 12) {
      year ++;
      month = 1;
    }
  }
  init(year, month)
}

document.querySelector('#prev').addEventListener('click', moveCalendar);
document.querySelector('#next').addEventListener('click', moveCalendar);
