# Taco-Order-System 👉 [Deployed Link](https://606646b8e074aa00075436c5--determined-hodgkin-b7c031.netlify.app/)

[![Overview Taco Order System](https://cdn.loom.com/sessions/thumbnails/06d6115dc6974976bea829e0e563362e-with-play.gif)](https://www.loom.com/share/06d6115dc6974976bea829e0e563362e "Overview Taco Order System")

## Project Description

🌮 Taco order system for pickup orders

📁 Render data from AirTable API with menu items with fields: image, title, price, description

🥡 Select number of tacos to shopping cart, modify order quantity if desired, submit order and receive receipt

<!--- 
Send object of order to AirTable and return order   Add tacos to shopping cart,
Will render taco image, title, price, quantity, description, and button to add the taco to your cart. When you click add to cart, the cart in the navbar will update with a counter to reflect the number of items in the cart. The cart page will be a different visual representation of the data object of the tacos selected that you will pass through props. Total price and quantity will be displayed and you can submit order that will display a separate page thank you for your order.
--->
## Wireframes

<img src="./tacos-order-system/src/Product Page.png"/>
<img src="./tacos-order-system/src/Order Page.png"/>

## Component Hierarchy

Components

- Navbar.jsx
- MenuItem.jsx
- CartItem.jsx
- TacoOrderCards.jsx
- Receipt.jsx
- ReceiptById.jsx
- ReceiptItem.jsx

<img src="./tacos-order-system/src/Components Chart.png">

## Airtable Sample Data


```json
{
"records" [
  {
    "createdTime": "2021-03-26T13:13:26.000Z",
    "fields": {
      "title": "Pollo Yucateco Taco",
      "price": "5",
      "description": "Chicken marinated in hot recado rojo, perfectly ro… with refried beans and tomatillo-avocado salsa. "
      },
    "id": "recJqpfNkDeIknw4t"
    },
  {
    "createdTime": "2021-03-26T13:13:26.000Z",
    "fields": {
      "title": "Al Pastor Taco",
      "price": "5",
      "description": "Thinly sliced, marinated Heritage pork served with cilantro, onions, and roasted pineapple."
      },
    "id": "recxXi7DVoOSmyz3P"
    },
  {
    "createdTime": "2021-03-26T13:13:26.000Z",
    "fields": {
      "title": "Carnitas Taco",
      "price": "5",
      "description": "Slow-roasted heritage pork and tomatillo-avocado s…pped with cilantro, onions, and spicy escabeche."
      },
    "id": "recyrCZRNtjQmolzO"
    }
]
}
```

#### MVP

- Render menu items from AirTable database
- Allow user to add tacos to shopping cart with counter
- Summary order page, can modify order quantity, and submit order
- Receipt of order
- Kitchen view of all orders

#### PostMVP

- useContext hook
- Stripe integration

## Project Schedule

| Day         | Deliverable                                        | Status     |
| ----------- | -------------------------------------------------- | ---------- |
| March 25-26 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| March 26    | Get Data                                           | Complete   |
| March 26    | Project Approval                                   | Complete   |
| March 29-31 | Core Component Structure                           | Complete   |
| April 01    | CSS                                                | Complete   |
| April 02    | Presentations                                      | Complete   |

## SWOT Analysis: March 25, 2021

### Strengths:

Pattern recognition

### Weaknesses:

Component Hierarchy and confusion with components vs. routes
Syntax dealing with objects

### Opportunities:

Do a full CRUD app time permitting

### Threats:

Time constraint
