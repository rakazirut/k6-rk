/*
    *** ramp up and ramp down virtual users ***

    ex: 10 users for 10 seconds
        then increase to 20 users for 1 minute

*/

import http from 'k6/http'

export let options = {
    stages: [
        { duration: '10s', target: 5 }, // 5 users for 10s
        { duration: '20s', target: 3 } // 3 users for 20s
    ]
}

export default function () {
    http.get('https://www.google.com/')
}