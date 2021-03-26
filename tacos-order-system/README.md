# Taco-Order-System

## Project Description

Taco order system for pickup orders. Will render taco image, title, price, quantity, description, and button to add the taco to your cart. When you click add to cart, the cart in the navbar will update with a counter to reflect the number of items in the cart. The cart page will be a different visual representation of the data object of the tacos selected that you will pass through props. Total price and quantity will be displayed and you can submit order that will display a separate page thank you for your order.

## Wireframes

<img src="./src/Product Page.png"/>
<img src="./src/Order Page.png"/>

## Component Hierarchy

App

Components (need six!)

- Navbar
- Tacos List
- Taco Card
- Counter (separate or in other component?)
- Order Sent

<img src="./src/Components Chart.png">
## API and Data Sample

Airtable API

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

- Render taco products data on page
- Allow user to add taco to shopping cart with counter
- Submit order

#### PostMVP

- U taco
- D taco
- useContext hook
- Stripe integration

## Project Schedule

| Day         | Deliverable                                        | Status     |
| ----------- | -------------------------------------------------- | ---------- |
| March 25-26 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| March 26    | Get Data                                           | Complete   |
| March 26    | Project Approval                                   | Incomplete |
| March 29-31 | Core Component Structure                           | Incomplete |
| April 01    | CSS                                                | Incomplete |
| April 02    | Presentations                                      | Incomplete |

## SWOT Analysis

### Strengths:

Pattern recognition

### Weaknesses:

Component Hierarchy and confusion with components vs. routes
Syntax dealing with objects

### Opportunities:

Do a full CRUD app time permitting

### Threats:

Time constraint
