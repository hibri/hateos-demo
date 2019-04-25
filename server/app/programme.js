function get(req, res) {
	var programme = {
		"_embedded": [
			{
				"name": "title", 
				"value": "Contino Tech Day Programe", 
				"title": ""
			},
			{
				"name": "session1", 
				"value": "Live hacking with Marcus", 
				"title": "Session 1"
			},
			{
				"name": "session2", 
				"value": "Evolving Hateos APIs", 
				"title": "Session 2",
				"_links": [{
					"rel": "session2-details",
					"method": "GET",
					"title": "Session Details",
					"href": "http://localhost:8080/programme/session2"
		
				}
		
				]
			}
		],
		"_links": [{
			"rel": "self",
			"method": "GET",
			"title": "Programme",
			"href": "http://localhost:8080/programme"

		},

		{
			"rel": "home",
			"method": "GET",
			"title": "Home",
			"href": "http://localhost:8080/"

		},

		{
			"rel": "attendees",
			"method": "GET",
			"title": "Tech Day Attendees",
			"href": "http://localhost:8080/attendees"
		}

		]
	};
	res.json(programme);
}


module.exports = get;
