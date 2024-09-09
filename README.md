# Dynamic Grid Component

This project implements a dynamic and reusable grid component, built with **Vue 3** and the **Composition API**. 
The grid component supports core features like searching, sorting, multi-selection, and exporting data. It's designed to be generic and customizable for different data models, 
following modern frontend development practices using **Vite** and **SCSS**.

## Table of Contents
- [Features](#features)
- [Data Model Example](#data-model-example)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [Components](#components)
  - [App](#app-component)
  - [DynamicGrid](#dynamicgrid-component)
  - [TaskPane](#taskpane-component)
- [Testing](#testing)
  - [Running Tests](#running-tests)
  - [Tests](#tests)

## Features

- **Search & Filter**: Users can search for deals by typing into a search box, filtering the grid based on text found in any string column.
- **Column Sorting**: Sort columns in ascending or descending order.
- **Task Pane for Details**: Clicking a row opens a task pane on the right to show detailed information of that record.
- **Multi-Selection**: Select multiple rows; if multiple rows are selected, the task pane closes.
- **Dynamic Columns**: Columns are generated dynamically from a provided JSON data model.
- **CSV Export**: Export the data currently displayed in the grid to a CSV file.

## Data Model Example

The grid is populated with a dynamic data model, such as:

```json
[
  { "key": "id", "type": "int", "label": "ID" },
  { "key": "issuer_name", "type": "string", "label": "Issuer" },
  { "key": "deal_name", "type": "string", "label": "Deal" },
  { "key": "bloomberg_id", "type": "string", "label": "Bloomberg ID" },
  { "key": "total", "type": "decimal", "label": "Total" },
  { "key": "industry", "type": "string", "label": "Industry" },
  { "key": "status", "type": "string", "label": "Status" },
  { "key": "analysts", "type": "string[]", "label": "Analysts" },
  { "key": "doc_count", "type": "int", "label": "Docs" },
  { "key": "custom_deal_identifiers", "type": "string[]", "label": "Identifiers" }
] 
```

Technology Stack
----------------

-   **Vue 3 (Composition API)**
-   **SCSS** for styling with modern features like variables and mixins.
-   **Vite** as the build tool for fast development and production builds.
-   **Jest** for unit/component testing.

Setup Instructions
------------------

### Prerequisites

-   **Node.js** (version 14+ recommended)
-   **npm** (Node Package Manager)

### Installation

1.  **Clone the repository:**

    `git clone https://github.com/your-username/dynamic-grid-component.git
    cd dynamic-grid-component`

2.  **Install dependencies:**
    `npm install`

### Running the Development Server

To start the development server, run:
`npm run dev`

### Build for Production

To build the application for production, run:
`npm run build`

The production-ready files will be located in the `dist` directory.

Components
-----

### App Component

The `App` component serves as the main entry point of the application, integrating the DynamicGrid component and managing the search functionality for filtering data. It acts as the parent component, handling the state and passing down props to child components.

### DynamicGrid Component

The `DynamicGrid` component dynamically generates table columns and rows based on the provided JSON data. It supports sorting, filtering, multi-selection, and CSV export.

**Props:**

-   `columns`: An array of objects defining the column keys and labels.
-   `searchQuery`: A string for filtering the rows based on the search input.

### TaskPane Component

The `TaskPane` component displays detailed information about the selected deal.

**Props:**

-   `data`: The data object representing the selected deal.
-   `columns`: An array of objects defining the column keys and labels.

Testing
-------

### Running Tests

To run the tests, use:
`npm test`

This will execute all tests located in the `tests/unit` directory using Jest.

### Tests

Tests are written using Vue Test Utils and Jest. Each component has a corresponding test file:

-   **App.spec.js:** Tests for the main application, including prop passing and search functionality.
-   **DynamicGrid.spec.js:** Tests for sorting, filtering, selection, and CSV export functionality.
-   **TaskPane.spec.js:** Tests for rendering deal details using provided column labels.