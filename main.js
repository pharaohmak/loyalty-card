
item1 = parseFloat(prompt('Enter the Cost of Item 1'))
item2 = parseFloat(prompt('Enter the cost of Item 2'))

x = prompt('Are you a preffered member')
yes = 'yes' || 'Yes' || 'Y' || 'y' || 'YES'
no = 'No' || 'no' || 'N' || 'n' || 'NO'

if (x === no) {
  y = item1 + item2
  console.log('Results - “Your total purchase is $”' + y)
} else if (x === yes) {
  y = parseFloat((item1 + item2) * 0.15)
  console.log(
    'Results - “Your total purchase is $' +
      y +
      ' , which includes your 15% discount.”',
  )
} else {
  alert('Error! Only enter "yes" or "no"')
}

