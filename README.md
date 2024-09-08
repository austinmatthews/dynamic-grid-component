# Dynamic Grid Component

This project implements a dynamic and reusable grid component, built with **Vue 3** and the **Composition API**. 
The grid component supports core features like searching, sorting, multi-selection, and exporting data. 
It's designed to be generic and customizable for different data models, following modern frontend development practices using **Vite** and **SCSS**.

### Features

-   **Search & Filter**: Users can search for deals by typing into a search box, filtering the grid based on text found in any string column.
-   **Column Sorting**: Sort columns in ascending or descending order.
-   **Task Pane for Details**: Clicking a row opens a task pane on the right to show detailed information of that record.
-   **Multi-Selection**: Select multiple rows; if multiple rows are selected, the task pane closes.
-   **Dynamic Columns**: Columns are generated dynamically from a provided JSON data model.
-   **CSV Export**: Export the data currently displayed in the grid to a CSV file.

### Data Model Example

The grid is populated with a dynamic data model, such as:

`[
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
]`

### Technology Stack

-   **Vue 3 (Composition API)**
-   **SCSS** for styling with modern features like variables.
-   **Vite** as the build tool for fast development and production builds.
-   **Jest/Mocha/Testing Library** for unit/component testing.

### Non-Functional Requirements

-   The grid component is **independent** and reusable across various data models.
-   The final build is **minified** for performance.

### Tests

-   Unit tests included, covering key functionality like column sorting, filtering, and row selection.

### Setup Instructions

1.  Clone the repository.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the development server.
4.  Run `npm run build` for a production build.
5.  Run `npm test` to execute the component tests.
