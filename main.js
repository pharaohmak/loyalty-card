document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calculate-btn').addEventListener('click', () => {
      const item1 = parseFloat(document.getElementById('item1').value);
      const item2 = parseFloat(document.getElementById('item2').value);
      const memberStatus = document.getElementById('member').value;

      if (isNaN(item1) || isNaN(item2)) {
          alert('Please enter valid numbers for the item costs.');
          return;
      }

      let totalCost;
      if (memberStatus === 'no') {
          totalCost = item1 + item2;
          document.getElementById('result').innerText = `Your total purchase is $${totalCost.toFixed(2)}`;
      } else if (memberStatus === 'yes') {
          totalCost = (item1 + item2) * 0.85; // 15% discount
          document.getElementById('result').innerText = `Your total purchase is $${totalCost.toFixed(2)}, which includes your 15% discount.`;
      } else {
          alert('Error! Please select "yes" or "no" for membership status.');
      }
  });
});