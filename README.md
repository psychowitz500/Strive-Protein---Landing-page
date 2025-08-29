Strive Protein - Product Landing Page
Project Overview
Welcome to the Strive Protein landing page, a modern and responsive website built to showcase a line of premium protein supplements. This project is a multi-section single-page application designed to inform customers about the products, highlight key benefits, and drive sales.

Features
Responsive Navbar: A mobile-friendly navigation bar with a hamburger menu for smaller screens.

Dynamic Hero Section: A striking introduction with a gradient heading, engaging call-to-action buttons, and embedded videos.

Interactive Feature Section: A grid showcasing the key benefits of the products with clean icons and descriptions.

Workflow/Nutrition Breakdown: A detailed section explaining the nutritional benefits of the supplements using a checklist format.

Product Pricing: A clean display of different product offerings, including images, prices, and features.

Customer Testimonials: A responsive grid of customer reviews to build trust and credibility.

Comprehensive Footer: A structured footer with links to resources, platform information, and community.

Technologies Used
React: A JavaScript library for building the user interface.

Vite: A fast front-end build tool.

Tailwind CSS: A utility-first CSS framework for building custom designs rapidly.

Lucide React: An open-source icon library for the feature icons and navbar menu.

Project Structure
├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── massgainer.png
│   │   ├── ... (other images and videos)
│   ├── index.html         # Main HTML file
├── src/
│   ├── components/
│   │   ├── App.jsx        # Main application component
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Workflow.jsx
│   ├── constants/
│   │   ├── index.jsx      # Central data file for the app
│   ├── index.css          # Main stylesheet with Tailwind directives
│   ├── main.jsx           # React entry point
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies
Getting Started
Follow these steps to set up the project locally on your machine.

Prerequisites
Node.js (LTS version) installed on your system.

A package manager like npm or yarn.

Installation
Clone the repository to your local machine:

Bash

git clone [repository-url]
Navigate to the project directory:

Bash

cd strive-protein-landing
Install the required dependencies:

Bash

npm install
# or
# yarn install
Running the Application
To start the development server and view the project in your browser:

Bash

npm run dev
# or
# yarn dev
The application will be available at http://localhost:5173/ (or another port as specified by Vite).

Customization
You can easily customize various aspects of the project to fit your needs:

Change the Logo: Replace the vite.svg file in the root directory and the logo.png file in src/assets. You'll also need to update the favicon link in index.html.

Update Content: All text content, product details, and testimonials are located in the src/constants/index.jsx file. You can modify this file to update the site's content.

Change Fonts: The project uses custom fonts configured in tailwind.config.js and index.css. To change them, simply update the @import rule in index.css and the fontFamily object in tailwind.config.js.

Modify Colors: Most colors are defined using Tailwind CSS utility classes. You can change the brand's primary colors by editing the relevant classes in the JSX components or by extending the theme in tailwind.config.js.

Contact
For any questions or suggestions, please contact [Your Name/Email].







give me file directly


Markdown

# Strive Protein - Product Landing Page

## Project Overview

Welcome to the Strive Protein landing page, a modern and responsive website built to showcase a line of premium protein supplements. This project is a multi-section single-page application designed to inform customers about the products, highlight key benefits, and drive sales.

## Features

* **Responsive Navbar**: A mobile-friendly navigation bar with a hamburger menu for smaller screens.
* **Dynamic Hero Section**: A striking introduction with a gradient heading, engaging call-to-action buttons, and embedded videos.
* **Interactive Feature Section**: A grid showcasing the key benefits of the products with clean icons and descriptions.
* **Workflow/Nutrition Breakdown**: A detailed section explaining the nutritional benefits of the supplements using a checklist format.
* **Product Pricing**: A clean display of different product offerings, including images, prices, and features.
* **Customer Testimonials**: A responsive grid of customer reviews to build trust and credibility.
* **Comprehensive Footer**: A structured footer with links to resources, platform information, and community.

## Technologies Used

* **React**: A JavaScript library for building the user interface.
* **Vite**: A fast front-end build tool.
* **Tailwind CSS**: A utility-first CSS framework for building custom designs rapidly.
* **Lucide React**: An open-source icon library for the feature icons and navbar menu.

## Project Structure

├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── massgainer.png
│   │   ├── ... (other images and videos)
│   ├── index.html         # Main HTML file
├── src/
│   ├── components/
│   │   ├── App.jsx        # Main application component
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Workflow.jsx
│   ├── constants/
│   │   ├── index.jsx      # Central data file for the app
│   ├── index.css          # Main stylesheet with Tailwind directives
│   ├── main.jsx           # React entry point
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies


## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* Node.js (LTS version) installed on your system.
* A package manager like `npm` or `yarn`.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone [repository-url]
    ```
2.  Navigate to the project directory:
    ```bash
    cd strive-protein-landing
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Application

To start the development server and view the project in your browser:

```bash
npm run dev
# or
# yarn dev
The application will be available at http://localhost:5173/ (or another port as specified by Vite).

Customization
You can easily customize various aspects of the project to fit your needs:

Change the Logo: Replace the vite.svg file in the root directory and the logo.png file in src/assets. You'll also need to update the favicon link in index.html.

Update Content: All text content, product details, and testimonials are located in the src/constants/index.jsx file. You can modify this file to update the site's content.

Change Fonts: The project uses custom fonts configured in tailwind.config.js and index.css. To change them, simply update the @import rule in index.css and the fontFamily object in tailwind.config.js.

Modify Colors: Most colors are defined using Tailwind CSS utility classes. You can change the brand's primary colors by editing the relevant classes in the JSX components or by extending the theme in tailwind.config.js.