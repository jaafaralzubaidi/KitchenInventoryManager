# Kitchen Inventory Manager

### A single page app to manage kitchen inventory using React. 

Features
This app has three purposes:

Keep track of how much food is in stock.
Keep track of what food is stored where.
List what items to buy on the next grocery shopping trip.
You will need to create React components that allow users to do the following:

Zone Management
Food storage is organized into zones.

Each zone should have a name and a color. You can let users select colors from a limited set that you define or use a color wheel to pick any color.
No two zones should be allowed to have the same color. You should either prevent the user from selecting the same color as an existing zone or show an error if they do and prevent them from adding the new zone.
Users should be able to add and remove zones. If the user removes a zone, the foods that were in that zone should be unassigned from any zone.
Registering Food
Users need a way to add foods to the inventory manager.

Foods must have a name, a barcode number, and a unit of measurement (examples: grams of rice, milliliters of oil, "each" for things that aren't easily divisible, like eggs).
No two foods should have the same barcode number. You should show an error and prevent the user from adding a food with a barcode that matches the barcode of an already registered food.
Foods can optionally have a minimum quantity to keep in stock. Users should be able to specify this when registering food.
Food Search
Once users have added foods to the system, they need to be able to record how much they have stored and in which zone(s). These actions start by looking up foods that have already been registered.

Give the users an input (or separate inputs) into which they can enter a barcode number or part of a food name. Either as they type or after they press a button (your choice), show them a list of results.
If they entered a number, show them either 0 or 1 results depending on whether you found a food that has the exact same barcode number as the one entered.
If they entered a string, show them a list of all foods where that string is a substring or exact match of the food's name. For example, searching for "rice" should turn up "brown rice", "white rice", "thrice washed lettuce", etc.
Each search result should include a button or link that takes the user to the quantity management screen for that food.
Quantity Management
Once users have found a food through food search, they need to be able to manage how much of the food is in each zone.

List the zones in which the food is already stored and how much is stored in those zones. Allow the user to modify how much is in each of the zones.
Give the user the ability to choose a new zone to which to add the food. They should be able to choose from already registered zones and include an initial quantity.
Any quantity of the food that was unassigned from a zone due to removing a zone should be listed under "unassigned".
Shopping List
Finally, in order to keep users from running out of important items, we want to give them a way to see what's gone below the target threshold so they can buy it next time they're at the grocery store.

List all the items for which the total quantity across all zones is lower than the target amount set for the food. Do not include foods without a target amount or with a target amount of 0.
Navigation
Users should be able to access all of the functionality listed above. You should create a homepage that lets them navigate to zone management, food registration, food search, and the shopping list. Alternatively, you can create a navigation bar that you include on every page and then take the user to a default page of your choice.

No page should be a dead end. You should include either a universal navigation bar or at least one button or link that take the user back to the homepage or a parent screen (for example, the "add zone" page could take the user back to the "zones" page, but then the "zones" page needs to give a way to get back to the homepage.