sequenceDiagram_SPA

    participant browser
    participant server

    Note right of browser: user writes a message in the form and click on save
    browser-->server: POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
    activate server
    server-->browser: 201 Created
    deactivate server