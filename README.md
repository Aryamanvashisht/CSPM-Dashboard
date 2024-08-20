# Dynamic Dashboard Project

Welcome to the Dynamic Dashboard Project! This is a user-friendly, interactive dashboard built with React. It offers a customizable interface for visualizing and managing data, with features that allow you to add, search, and organize widgets across various categories.

## Key Features

Features

-**Dynamic Widget Management**: Easily add, remove, and filter widgets within different categories.

-**Search Functionality**: Quickly find widgets by searching for titles or text.
Modal for Adding Widgets: Use a sleek modal to add new widgets or manage existing ones.

-**Responsive Design**: Built with Tailwind CSS to ensure the dashboard looks great on any device.

-**Integrated Navbar**: Navigate effortlessly with a navbar that includes breadcrumbs and a search bar.

## Components Overview

1. **App**: This is the heart of the application, managing the overall state and rendering the main components like Dashboard, AddWidgetModal, and Navbar.

2. **Dashboard**: The main display area for your widgets, categorized and equipped with search and filtering options. It also includes buttons to add new widgets.

3. **Navbar**: A straightforward navigation bar featuring breadcrumbs, a search bar, and a notification icon.

4. **AddWidgetModal**: A convenient modal that lets you add new widgets to your categories and manage the ones you already have.

5. **useStore**: This is where the application's state is managed, thanks to Zustand, keeping track of categories and widgets.

## Getting Started

-**Prerequisites**

Node.js (v14 or higher)
npm or Yarn

## Installation

1. **Clone the Repository**:

```bash
   git clone https://github.com/aryamanvashisht/dynamic-dashboard.git
```

## Install Dependencies

### For the Frontend:

```bash
npm install
```

### Run the Frontend Server:

```bash
npm run dev
```

### Open the Application:

Open your browser and visit http://localhost:5173 to view the application.

## Acknowledgements

-**React Icons**: For the beautiful icons used throughout the Navbar and Dashboard.
-**Zustand**: For making state management simple and effective.
-**Tailwind CSS**: For providing the styling that keeps the dashboard looking clean and responsive.
