# Portfolio Website for Aaron Baumgarten

## Introduction
This is a portfolio website used to display the personal projects, skills, and experience that Aaron has to offer
for potential full-time employment. This website is intended to be viewed by employers with the objective of learning
what skills and experience Aaron is able to offer as a full-stack developer.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features and Functionality](#features-and-functionality)
- [Troubleshooting and FAQs](#troubleshooting-and-faqs)
- [Best Practices and Recommendations](#best-practices-and-recommendations)
- [Deployment](#deployment)
- [External Resources and References](#external-resources-and-references)

## Installation

### Prerequisites
Before getting started, ensure you have the following installed on your system:
- [Git](https://git-scm.com/) - Version control system for cloning repositories.
- [Node.js](https://nodejs.org/) - JavaScript runtime environment.

### Clone the Repository
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to store the project.
3. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/aaronbau1/Portfolio-Website.git

### Open in your IDE
1. Open your IDE of choice
2. Navigate to the directory where you cloned the repository.
3. Open the cloned project folder in your IDE.
4. Run the following command to compile and run the locally:
   ```bash
   npm run dev

## Configuration

### Obtain Resend API Key
1. Visit the [Resend website](https://resend.com) or the [Resend Developer Portal](https://developer.resend.com).
2. Sign in or create an account if needed.
3. Navigate to the API Key section or Dashboard to generate a new API key for your project.

### Environment Setup
1. After cloning the repository, navigate to the project directory.
2. Create a file named `.env.local` in the root of your project.
3. In the `.env.local` file, add the following line and replace `(insert key here)` with your Resend API key:
   ```plaintext
   RESEND_API_KEY=your_resend_api_key_here

## Usage
- Instructions on how users can interact with the webpage.
- Include code snippets or examples demonstrating basic usage scenarios.

## Folder Structure

### Root Directory
Contains configuration files for Next.js and TailwindCSS as well as project dependency files.

### Actions
Contains one file sendEmail that contains a function to validate and send an email to a specific email address using Resend.

### Email
Contains the files to format the email sent in the Contact section using React Email.

### Lib
Contains utility functions, types for TypeScript, custom Hooks, and the data formatted on the webpage.

### Public
Contains all images displayed on the webpage and a copy of a resume that can be downloaded.

### Src

#### Components
Contains all Next.js components used in the layout and page files that make up the content on the webpage.

#### Context
Contains the configuration files for the context objects used in various components, being the Theme (light and dark mode) and the Active Section on the webpage.

#### globals.css
Contains styling used throughout the root directory.

#### layout
Contains the layout template for all webpages in the project.

#### page
The single page that holds the components for this project.

## Features and Functionality of Major Components

### Component: Header

#### Description
The Header component serves as the navigational header for the application.

#### Functionality
- **Navigation Links**: Renders navigation links based on the provided data in the `links` array from `@/lib/data`.
- **Active Section Tracking**: Highlights the active section based on user interaction and scrolls.
- **Animated Transitions**: Employs Framer Motion for smooth animations when selecting navigation links.

#### Dependencies and Context
- `motion` (from Framer Motion): Handles animations and transitions for the Header section.
- `useActiveSectionContext` (Custom context hook): Manages active section state and provides methods for section tracking.

## Features and Functionality

### Component: Intro Section

#### Description
The Intro component serves as the introductory section within the application. It includes a personal greeting and options to connect or access additional information.

#### Functionality
- **Connection Options**: Provides options to contact the user, download the resume, and links to the user's LinkedIn and GitHub profiles.
- **Scroll Animation**: Utilizes Framer Motion for animations, including fade-ins for various elements when in view.

### Components: Projects / Project 

#### Description
The Project component serves as a display card showcasing individual projects within the application.

#### Functionality
- **Project Display**: Renders project information, including title, description, tags, and associated images.
- **Scroll Animation**: Utilizes Framer Motion for scroll-based animations, adjusting scale and opacity based on scroll progress.

#### Dependencies and Props
- `projectsData` (from `@/lib/data`): Contains project information, including titles, descriptions, tags, and image URLs.
- `title` (string): Title of the project displayed in the component.
- `description` (string): Description or details of the project.
- `tags` (string[]): Array of tags categorizing the project.
- `imageUrl` (string): URL of the image associated with the project.

### Component: Skills Display

#### Description
The Skills component showcases the skills and expertise of the user in three categories, being languages & frameworks, technologies, and concepts.

#### Functionality
- **Fade-In Animation**: Utilizes Framer Motion for a fade-in animation effect when skills are in the viewport.

#### Dependencies and Data Structure
- `skillsData` (from `@/lib/data`): Contains categorized skills data structured as key-value pairs.
  - Keys: 'langFrame', 'tech', 'concepts'
  - Values: Arrays containing skills corresponding to each category.

### Component: Contact

#### Description
The Contact component presents a form allowing users to send messages directly to the specified email address.

#### Functionality
- **Form Submission**: Allows users to input their email address and message, then submit the form.
- **Email Sending**: Utilizes the `sendEmail` function from the `actions` folder to send messages to the specified email address.

#### Dependencies and Libraries Used
- `motion` (from Framer Motion): Handles animations and transitions for the Contact section.
- `useSectionInView` (Custom context hook): Tracks if the Contact section is in the viewport.
- `sendEmail` (Custom action): Sends email messages using the specified form data.

### Component: Theme Switch

#### Description
The Theme Switch component allows users to toggle between light mode and dark mode.

#### Functionality
- **Theme Toggle**: The component displays a button that, when clicked, toggles between light mode and dark mode.
- **Theme Context**: Utilizes the `useTheme` context to manage and toggle between different themes (light and dark) within the application.
- **Icons**: Uses the `BsMoon` and `BsSun` icons from `react-icons/bs` to represent dark mode and light mode, respectively.

#### Dependencies and Context
- `useTheme` (Custom context hook): Manages the application theme state and provides methods to toggle between themes.

## Deployment

### Deploying on Vercel
1. Sign in or create an account on [Vercel](https://vercel.com/).
2. Once logged in, click on the "Import Project" button on the dashboard.
3. Choose the Git provider where your Next.js repository is hosted (GitHub, GitLab, Bitbucket, etc.).
4. Authorize Vercel to access your repository.
5. Select the repository you want to deploy.
6. Configure the project settings (add environment variables from [Environment Setup](#environment-setup)).
7. Click on "Deploy" to start the deployment process.

### Continuous Deployment
Vercel supports automatic deployments through Git integrations. Any changes pushed to the specified branches (e.g., main, master) will trigger automatic deployments to your Vercel project
