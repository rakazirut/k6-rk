/*
    create mock MPI for testing - dummy API

    https://designer.mocky.io

    after creating - do test on provided mock url https://run.mocky.io/v3/285760c0-4de0-4c36-aa1a-218c1fb5a9c0

    how to determine if test has passed or failed

    ex: if http response is 200, then pass, else fail

        Request URL: https://run.mocky.io/v3/285760c0-4de0-4c36-aa1a-218c1fb5a9c0
        Request Method: GET
        Status Code: 200 OK

        we check to see if status code is 200

        *** checks ***

        checks are asserts but they do not stop test execution

        asserts WILL fail the test and stop execution, checks will not stop the tests
*/

import http from 'k6/http'
import { check } from 'k6'

export default function () {
    // function returns response
    let response = http.get('https://run.mocky.io/v3/285760c0-4de0-4c36-aa1a-218c1fb5a9c0')
    check(response, {
        'is status code 200': (r) => r.status === 200,
    })
    // we use === so along with 200, will check value and data type
    // expected and actual data type as well as value must be the same
}