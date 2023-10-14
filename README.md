### Login/Registration page

This is a react frontend service that handles authentication i.e., login and registration.

## How to run locally

Clone the got repo run `git clone https://github.com/SakshamGairola/Login-react-frontend.git`

Install required dependencies `npm install`

To run the application run `npm run dev`

## Components in application

`main.jsx` is the staring point of the application.

`components/` directory holds 2 sub directories `Auth/` and `Home/` with their respective components.

`Auth` component gives login/registration form.

`Home` component gives user detail.

`api/` directory contains required api methods to connect to backend service.

## Environment Variables

`VITE_PUBLIC_BAE_URL`: species the url to connect to the backend service
