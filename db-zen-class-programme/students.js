db.students.insertMany(
    [
        {
            appeared:
            [
                {
                    id: 1,
                    student_name: "Aswin",
                    status: "selected"
                },
                {
                    id: 2,
                    student_name: "Babu",
                    status: "selected"
                },
                {
                    id: 3,
                    student_name: "Basa",
                    status: "selected"
                },
                {
                    id: 4,
                    student_name: "Chandru",
                    status: "selected"
                },
                {
                    id: 5,
                    student_name: "Dinesh",
                    status: "selected"
                },
                {
                    id: 6,
                    student_name: "Eswar",
                    status: "selected"
                },
                {
                    id: 7,
                    student_name: "Fasil",
                    status: "selected"
                },
                {
                    id: 8,
                    student_name: "Gopal",
                    status: "Re-Interview"
                },
            ]
        },
        {
            not_Appeared: 
            [
                {
                    id: 1,
                    student_name: "Ajay",
                    status: "Not Appeared"
                },
                {
                    id: 2,
                    student_name: "Albert",
                    status: "Not Appeared"
                },
                {
                    id: 3,
                    student_name: "Anbalagan",
                    status: "Not Appeared"
                },
                {
                    id: 4,
                    student_name: "Charless",
                    status: "Not Appeared"
                },
                {
                    id: 5,
                    student_name: "Dawood",
                    status: "Not Appeared"
                },
                {
                    id: 6,
                    student_name: "Hemalatha",
                    status: "Not Appeared"
                },
            ]
        }

])