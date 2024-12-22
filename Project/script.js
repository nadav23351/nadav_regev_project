document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;
    const gender = document.getElementById('gender').value;  // קריאה לבחירת המגדר
    
    let bmr;
  
    // חישוב BMR (Basal Metabolic Rate) לפי מגדר ורמת פעילות
    if (gender === 'male') {
      // נוסחאת החישוב לגברים
      if (activity === 'low') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (activity === 'moderate') {
        bmr = (10 * weight + 6.25 * height - 5 * age + 5) * 1.5;
      } else {
        bmr = (10 * weight + 6.25 * height - 5 * age + 5) * 1.9;
      }
    } else {
      // נוסחאת החישוב לנשים
      if (activity === 'low') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      } else if (activity === 'moderate') {
        bmr = (10 * weight + 6.25 * height - 5 * age - 161) * 1.5;
      } else {
        bmr = (10 * weight + 6.25 * height - 5 * age - 161) * 1.9;
      }
    }
  
    // הצגת התוצאה
    document.getElementById('result').innerHTML = `הצריכה הקלורית היומית שלך היא: <span class="calories">${Math.round(bmr)} קלוריות</span>`;
  
    // המרת רמת הפעילות לעברית
    const activityInHebrew = activity === 'low' ? 'נמוכה' : activity === 'moderate' ? 'בינונית' : 'גבוהה';
    
    // שמירה והצגת היסטוריית חישובים
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `
      <div class="info">גיל: ${age}, משקל: ${weight} ק"ג, גובה: ${height} ס"מ, רמת פעילות: ${activityInHebrew}, מגדר: ${gender === 'male' ? 'גבר' : 'אישה'}</div>
      <div class="result">קלוריות: ${Math.round(bmr)}</div>
    `;
    document.getElementById('historyList').appendChild(historyItem);
});
