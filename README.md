# Combinator-js-html
This JavaScript application is designed to combine characters from three input fields and generate all possible combinations of these characters. Here's a breakdown of its functionality:

1. **Input Fields:**
   - The application expects three input fields with IDs "word1," "word2," and "word3," where users can input characters.

2. **Event Listener:**
   - It listens for a click event on a button element with the ID "combine" to trigger the combination calculation.

3. **Combination Calculation:**
   - When the button is clicked, the application retrieves the values from the three input fields.
   - It splits each input value into individual characters.
   - It then iterates through each character of the first input, combining it with each character from the second and third inputs.
   - For each combination, it constructs a string with the format "character1-character2-character3" and accumulates these strings.
   - The final accumulated string contains all possible combinations separated by line breaks.
   - This final string is then displayed in an output field with the ID "result."

4. **Validation:**
   - Before performing the combination calculation, the application checks if all input fields are filled. If any of the fields are empty, it displays an alert prompting the user to fill all fields.

5. **Output:**
   - The final combinations are displayed in the output field with the ID "result," where each combination appears on a new line.

This application provides a simple but effective way to generate combinations of characters from multiple input fields, potentially useful in various scenarios such as generating permutations for passwords or exploring linguistic patterns.
