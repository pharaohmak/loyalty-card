# Purchase Total Calculator

## Description

The Purchase Total Calculator is a JavaScript application that calculates the total purchase amount based on the cost of two items entered by the user. It also provides a discount of 15% for preferred members, determined by a user prompt.

## Functionality

1. **Input Prompt:**
   - Requests the cost of Item 1 and Item 2 from the user.

2. **Membership Check:**
   - Asks the user if they are a preferred member ('yes' or 'no').
   - Accepts variations in user input ('yes', 'Yes', 'Y', 'y' for yes; 'no', 'No', 'N', 'n' for no).

3. **Calculations:**
   - If the user is not a preferred member ('no'), sums up the costs of Item 1 and Item 2 to calculate the total purchase amount.
   - If the user is a preferred member ('yes'), calculates a 15% discount on the total cost of Item 1 and Item 2.

4. **Output:**
   - Logs the total purchase amount to the console along with appropriate messages based on whether the discount is applied.

5. **Error Handling:**
   - Alerts the user and prompts them to enter only 'yes' or 'no' if the input does not match expected values.

## Usage

To use the Purchase Total Calculator:
- Open the JavaScript console in your browser.
- Run the script and follow the prompts to enter the costs of Item 1 and Item 2, and indicate if you are a preferred member.

## Example

```javascript
item1 = parseFloat(prompt('Enter the Cost of Item 1'));
item2 = parseFloat(prompt('Enter the cost of Item 2'));

x = prompt('Are you a preferred member?');
yes = 'yes' || 'Yes' || 'Y' || 'y' || 'YES';
no = 'No' || 'no' || 'N' || 'n' || 'NO';

if (x === no) {
  y = item1 + item2;
  console.log('Results - Your total purchase is $' + y);
} else if (x === yes) {
  y = parseFloat((item1 + item2) * 0.85); // 15% discount applied
  console.log('Results - Your total purchase is $' + y + ', which includes your 15% discount.');
} else {
  alert('Error! Only enter "yes" or "no".');
}
```

## Notes
 
- Ensure to provide numerical inputs for Item 1 and Item 2.
- Verify your membership status by entering ‘yes’ or ‘no’ when prompted.
