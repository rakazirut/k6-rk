/* 
    write in js
    call google.com - https://google.com/
    when 1000's of users call google.com, what will happen?
    call means get - http.net
*/

import http from 'k6/http'

// specify virtual users and duration
export let options = {
    vus: 10,
    duration: '10s'
}

// main function where user will be spread
export default function () {
    http.get('http://www.google.com/'); // alt + shift + f -> autoformat

}

/*
    *** options ***
    
    instead of k6 run --vus 10 --duration 10s test/01-script.js
    we can configure this with export let options
    
*/
