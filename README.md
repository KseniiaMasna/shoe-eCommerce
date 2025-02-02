# Shoe E-Commerce Website

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)  
- [My Process](#my-process)
  - [Tech Stack](#tech-stack)
  - [UI/UX Design](#ui-ux-design)
- [Installation](#installation)

## Overview

### ✨ Features

- **Grid-Based Shopping Page Layout** – A structured product listing in a 3x3 grid for improved user experience.
- **Navigation** – A focused navigation bar with a meaningful structure, including subcategory icons in the second-level navigation bar and a "Go to Top" button for easy navigation.
- **Categories** – Organized hierarchically for intuitive browsing.
- **Card Components** – Displays key product information. Hovering reveals color variations.
- **Shoes Quick View** – Clicking a product opens a popup with detailed product information.
- **Filtering** – A sticky filter panel that can be hidden when not needed and remains at the top while scrolling. Users can set their shoe size for personalized filtering.
- **"See More" Button** – No automatic product loading to improve accessibility; color variations are labeled under each model.
- **Favorites System** – Save shoes for quick access.

## The Challenge

The goal of this challenge is to design a shopping page for an e-commerce website using React.js and Tailwind CSS. The objective is to create an intuitive interface that allows users to browse products and view product details efficiently.

## My Process

The development process followed a **user-centered design** approach, divided into two key phases: **Research & Design** and **Development**.

### 📂 Tech Stack

#### ⚙️ Project Setup
- Initialized a React.js project using Vite for optimal performance.
- Installed and configured Tailwind CSS for styling and responsiveness.

#### 📦 Component Structure
- **Navbar** – Provides category selection and user actions (cart, profile).
- **ProductGrid** – Displays products in a responsive grid layout.
- **ProductCard** – Reusable component showing product image, name, price, and a "Quick View" button.
- **QuickView Modal** – Popup displaying product details when clicked.

**Frontend:** React.js, Tailwind CSS

### 📸 UI/UX Design

#### 1. Design Process

🔍 **Research & UX Best Practices**
- Conducted research on e-commerce UX best practices.
- Defined the information architecture to ensure a logical flow from navigation to product exploration.
- Created wireframes to outline the page structure and product grid layout.

#### 2. Navigation Structure

**First-Level Navigation (Main Nav Bar):**
- **Left Corner:** Company logo & search bar.
- **Center:** Main categories for easy access.
- **Right Corner:** User options (cart, profile).

**Second-Level Navigation (Subcategories):**
- Optimized number of categories for easier decision-making.
- Custom icons for better visualization and recognition.

#### 3. Grid Layout & Components

**Grid Layout:**
- **3×3 Grid** – Based on UX best practices for optimal usability.

**Card Component:**
- Displays essential details: image, title, purpose, and price.
- Hover effect provides visual feedback and encourages interaction.

#### 4. Quick View Feature
- Large product images – "We buy what we see!"
- Displays essential product information along with an "Add to Cart" button.
- Secondary button to discover all product details.

#### 5. Additional Features

- **Personalization:** Users can set up their shoe size for a tailored experience.
- **Filters:** Hidden when not needed, sticks to the top when scrolling, includes a "Go to Top" button (**still in development**).
- **Accessibility Considerations:**
  - "See More" Button: Avoids automatic product loading to enhance accessibility.
  - **Color Picker:** Includes text labels to assist users with color blindness and screen readers.

#### 6. Conclusion

Some features were omitted based on business goals and target audience needs. The focus was on creating a simple, intuitive, and essential shopping experience. Future iterations can adapt additional features as needed.

**View the full design on Figma:**
[Design Figma file](https://www.figma.com/design/aOhYklmtU0mIW0usvppzHM/Design?node-id=11-416&t=zZyPy8pRo9TGT3hj-1)

## 🚀 Installation

### Clone the repository:
```bash
git clone git@github.com:KseniiaMasna/shoe-eCommerce.git
```

### Install dependencies:
```bash
cd shoe-ecommerce
npm install
```

### Start the development server:
```bash
npm run dev
```

