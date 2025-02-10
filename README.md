# Band Merch Store

A simple React application for managing a merchandise store. Users can create, read, update, and delete items, as well as adjust the quantity of items in stock.

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete items in the store.
- **Quantity Management**: Buy items (decrease quantity) or restock items (increase quantity).
- **Out of Stock Indicator**: Items with a quantity of 0 are marked as "Out of Stock".
- **Responsive Design**: Works on all screen sizes.

---

## Component Tree
Here’s a visual representation of the application’s component structure:
App
├── ItemForm
└── ItemList
└── Item


### Explanation of Components
1. **App**:
    - The root component that manages the state for all items.
    - Handles CRUD operations and quantity updates.
    - Renders the `ItemForm` and `ItemList` components.

2. **ItemForm**:
    - A form for adding new items or editing existing items.
    - Receives an `editingItem` prop to pre-fill the form when editing.

3. **ItemList**:
    - Displays a list of all items.
    - Maps over the `items` array and renders an `Item` component for each item.

4. **Item**:
    - Represents a single item in the store.
    - Displays the item's name, description, and quantity.
    - Includes buttons for buying, restocking, editing, and deleting the item.

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/merch-site.git
   cd merch-site

2. Install dependencies
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

Technologies Used
React: JavaScript library for building the user interface.

UUID: Library for generating unique IDs for items.

CSS: Basic styling for the application.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Screenshots


Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements.