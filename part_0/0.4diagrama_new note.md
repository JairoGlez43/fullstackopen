sequenceDiagram
    participant browser
    participant server

    Note right of browser: user write a message in the form and click on save
    browser-->server: HTTP Post https://fullstack-exampleapp.herokuapp.com/new_note
    activate server
    server-->browser: HTTP 302(redirection to /notes)
    deactivate server
    browser--server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
    activate server
    server-->browser: notes/html file
    deactivate server
    browser--server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
    activate server
    server-->browser: main.css file
    deactivate server
    browser--server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
    activate server
    server-->browser: main.js file
    deactivate server
    Note right of browser: starts executing main.js code, that requires the json data
    browser--server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
    activate server
    server-->browser: data.jason file
    deactivate server
    Note right of browser: executes the event handler that renders notes
    
    
