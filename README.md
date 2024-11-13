# Product Management Dashboard

This Angular application allows you to manage products with a PrimeNG table and visualize the product data in a bar chart using ngx-charts. The app provides CRUD operations (Create, Read, Update, Delete) for products, displaying them in a PrimeNG table and dynamically updating a bar chart.

## Features

- CRUD Operations: Add, edit, delete, and view products in a PrimeNG table.
- Dynamic Bar Chart: View product data in a bar chart format, updated dynamically with every table change.
- Responsive Design: Optimized layout using CSS Flexbox for a user-friendly interface.
- Form Validation: Validations for product form inputs to ensure data consistency

## Prerequisites

Node.js (v14 or later) and npm
Angular CLI installed globally
Installing Node.js and npm

## Installing Angular CLI

npm install -g @angular/cli

# Getting Started

1. Clone the Repository

- git clone <repository-url>
- cd product-management-dashboard

2. Install Dependencies
   Run the following command to install all required dependencies:
   - npm install --force
3. Run the Application
   To start the development server, run:
   - ng serve
     The application should now be running at http://localhost:4200.

# Commands Overview

npm install: Installs all necessary dependencies listed in package.json.
ng serve: Compiles the application and starts a local development server on http://localhost:4200.

# Usage

- Adding a Product

Enter the product details (name, price, and category) in the form beside the chart and click Add Product. The new product will display in the table below and reflect in the chart.

- Editing a Product

Select a product from the table to load its details in the form, update the necessary information, and click Edit Product to save changes.

- Deleting a Product

Click the delete icon next to a product in the table. The product will be removed from both the table and the chart.

- Dynamic Chart Updates

The bar chart dynamically updates with every change in the product list, accurately reflecting the table's data.
