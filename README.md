# Table App

A simple React-based table app that includes dropdown components for single and multi-select options.

## File Structure

    ```bash
    table-app/
        ├── public/
        │   ├── index.html
        ├── src/
        │   ├── components/
        │   │   ├── DropdownSingleSelect.js
        │   │   ├── DropdownMultiSelect.js
        │   │   ├── TableRow.js
        │   │   ├── Table.js
        │   ├── styles/
        │   │   ├── App.css
        │   │   ├── Table.css
        │   ├── App.js
        │   ├── index.js
        ├── package.json


## Features

- **Table**: Displays rows of data with selectable options for each row.
- **DropdownSingleSelect**: A dropdown component for selecting a single option.
- **DropdownMultiSelect**: A dropdown component for selecting multiple options.
- **Custom Styling**: Responsive design with custom styles for the table and dropdowns.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dhruvjaiswal2981/Table-App.git
   cd Table-App

2. Install Dependencies:

    ```bash
    npm install

3. Start the development server:

    ```bash
    npm start

This will start the app and open it in your browser at http://localhost:3000.

## Preview of the Table

- Below is a preview of the table in action with the dropdown selections:

![Table Preview 1](./public/table.png)
![Table Preview 2](./public/table-1.png)

## Components

- DropdownSingleSelect.jsx
    - A dropdown that allows a user to select a single option from a list.
    - It receives options, selectedValue, and onChange as props.

- DropdownMultiSelect.jsx
    - A dropdown that allows a user to select multiple options.
    - It includes an option to add a new item to the dropdown list.
    - It receives options, selectedValues, onChange, and addNewOption as props.

- TableRow.jsx
    - Represents a row in the table that displays data for each item.
    - Receives data and displays individual table cells with the ability to select from dropdowns.

- Table.jsx
    - Displays a table consisting of multiple TableRow components.
    - Passes necessary data to DropdownSingleSelect and DropdownMultiSelect components.

## Styles

- App.css: Global styles for the app container and layout.
- Table.css: Styles specific to the table, including the layout and appearance of the table rows.

## Deployment

- Live Demo: The application is hosted on Netlify.
- Access it here: https://dhruv-table.netlify.app/
