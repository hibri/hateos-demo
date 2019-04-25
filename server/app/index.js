function get(req, res) {

    var index = {
        "_embedded": [
            {
                "name": "description",
                "title": "Description",
                "value": "Contino Tech Day"
            }
        ],
        "_links": [{
            "rel": "self",
            "method": "GET",
            "title": "Home",
            "href": "http://localhost:8080/"

        },

        {
            "rel": "next",
            "method": "GET",
            "title": "Tech Day Programme",
            "href": "http://localhost:8080/programme"
        },

        {
            "rel": "attendees",
            "method": "GET",
            "title": "Tech Day Attendees",
            "href": "http://localhost:8080/attendees"
        }

        ]

    };
    res.json(index);
}

module.exports = get;
