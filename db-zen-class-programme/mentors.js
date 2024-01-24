db.mentors.insertMany([
    {
        id: 1,
        name: "Sanjay",
        batch: [
            {
                batch_code: "B51 WD1",
                language: "English",
                timing: "8am to 10am",
                mentees_count: 20
            },
            {
                batch_code: "B52 WD4",
                language: "Tamil",
                timing: "11pm to 1pm",
                mentees_count: 24
            }
        ]

    },
    {
        id: 2,
        name: "Arun",
        batch: [
            {
                batch_code: "B52 WD2",
                language: "English",
                timing: "8am to 10am",
                mentees_count: 14
            },
            {
                batch_code: "B53 WD2",
                language: "English",
                timing: "12pm to 3pm",
                mentees_count: 32
            }
        ]

    },
    {
        id: 3,
        name: "Arthi",
        batch: [
            {
                batch_code: "B52 WD3",
                language: "Tamil",
                timing: "8am to 10am",
                mentees_count: 28
            },
            {
                batch_code: "B52 WD3",
                language: "Tamil",
                timing: "6pm to 9pm",
                mentees_count: 19
            }
        ]

    }
])