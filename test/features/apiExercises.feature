Feature: Api Testing

    @api
    Scenario: Get user list
        # When I send an API request to "/data/v1/user?limit=6", the expected response should be "200"
        # When I send an API request to "/dta/v1/user?limit=6", the expected response should be "404"
        # When I send an GET request to "/data/v1/user/" with "60d0fe4f5311236168a109cf"
        When I send a request with the following parameters:
            | baseURL       | https://dummyapi.io                                                                 |
            | path          | /data/v1/user/create                                                                |
            | requestMethod | POST                                                                                |
            | headers       | {"Content-Type": "application/json", "app-id": "6565a64b90fff7d4682719d8"}          |
            | body          | {"firstName": "John1", "lastName": "Doe", "email": "lasigurnefolosit@mail.com"}     |
            | status        | 200                                                                                 |
        When I send a request with the following parameters:
            | baseURL       | https://dummyapi.io                                                                 |
            | path          | /data/v1/user/                                                                      |
            | requestMethod | GET                                                                                 |
            | headers       | {"Content-Type": "application/json", "app-id": "6565a64b90fff7d4682719d8"}          |
            | status        | 200                                                                                 |
        # When I update an user, return updated user data