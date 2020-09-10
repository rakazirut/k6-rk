/* 
    write in js
    call google.com - https://google.com/
    when 1000's of users call google.com, what will happen?
    call means get - http.net
*/

import http from 'k6/http'

// main function where user will be spread
export default function () {
    http.get('http://www.google.com/'); // alt + shift + f -> autoformat

}

/*
    *** adding virtual users ***

    lets execute test with 1 virtual user -> k6 run tests/01-script.js

    try with 10 users over 10 seconds -> k6 run --vus 10 --duration 10s test/01-script.js

    *** init code ***

    init code -> called only once per virtual user
        ex: initalizing variables

    *** options ***
    
*/
