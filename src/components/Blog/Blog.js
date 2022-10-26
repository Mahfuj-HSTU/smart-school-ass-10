import React from 'react';

const Blog = () => {
    return (
        <div className='text-start mx-5 mt-5'>
            <div className='bg-secondary bg-opacity-50 p-3 rounded-4 mb-4'>
                <h3>What is Cors?</h3>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
            <div className='bg-secondary bg-opacity-50 p-3 rounded-4 mb-4'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <h6>Some other options to implement authentication</h6>
                <ul>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>Okta</li>
                    <li>JSON Web Token</li>
                </ul>
            </div>
            <div className='bg-secondary bg-opacity-50 p-3 rounded-4 mb-4'>
                <h3>How does the private route work?</h3>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
                <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.</p>
            </div>
            <div className='bg-secondary bg-opacity-50 p-3 rounded-4 mb-4'>
                <h3>What is Node?How does Node work?</h3>
                <p>A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes.</p>
                <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”.</p>
            </div>
        </div>
    );
};

export default Blog;
