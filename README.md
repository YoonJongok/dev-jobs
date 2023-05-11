# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
<br/>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

<br/>

## Overview

<br/>

### Business requirements

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- Be able to toggle the dark theme and persist the theme when visit again or refresh the page
  <br />
  <br />

### Screenshot

![x](./public/preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/YoonJongok/dev-jobs)
- Live Site URL: [Add live site URL here](https://dev-jobs-eight.vercel.app/)
  <br/>

## My process

### Built with

- React, Next.js, Typescript
- Tailwind css, clsx, tailwind-merge and headlessUI
- react-query
- react-hook-form
- zod
- zustand
- Mobile-first workflow and Responsive design

<br/>

### What I learned

Using new Next.js 13 features which is dividing server and client components.
Also adapted React Typescript types such as ComponentProps, PropsWithChildren etc.
The biggest challenge for this project was persisting the theme mode using localStorage. In normal react application, i can just call the localstorage because react is used for server side application. However, to be able to use the client side methods in Next.js requires its own approach such as using 'use client' directive.
I experienced that using 'use client' directive on top of the file did not resolve the issue with 'window/localstorage is not defined'. that's why i had to use useEffect to confirm that localstorage is defined fully from client side.
<br />

### Continued development

I will keep delving into Next.js 13 new features since this is widely used solutions for React world. I will focus on using server side actions provided by Next.js and actually implementing the full stack application just only using Next.js framework.

<br />

## Author

- Frontend Mentor - [@YoonJongok](https://www.frontendmentor.io/profile/YoonJongok)

