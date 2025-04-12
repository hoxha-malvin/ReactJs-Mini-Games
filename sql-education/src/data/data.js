const data = [
  {
    id: 1,
    hint: "Young, the padawans are — less than 20, you seek.",
    table: "padawans",
    expected_sql: "SELECT * FROM padawans WHERE age < 20;",
    example_sql: "SELECT * FROM padawans WHERE age > 30;",
    resulted_table: [
      { "id": 1, "name": "Ahsoka Tano", "species": "Togruta", "age": 17, "lightsaber_color": "Green" },
      { "id": 3, "name": "Ezra Bridger", "species": "Human", "age": 15, "lightsaber_color": "Blue" },
      { "id": 4, "name": "Luke Skywalker", "species": "Human", "age": 19, "lightsaber_color": "Green" }
    ]
  },
  {
    id: 2,
    hint: "The blue blade, only the worthy ignite.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE lightsaber_color = 'Blue';",
    example_sql: "SELECT name FROM padawans WHERE lightsaber_color = 'Green';",
    resulted_table: [
      { name: "Ezra Bridger" },
      { name: "Shaak Ti" }
    ]
  },
  {
    id: 3,
    hint: "Human, the species must be. Reveal their names.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE species = 'Human';",
    example_sql: "SELECT name FROM padawans WHERE species = 'Togruta';",
    resulted_table: [
      { name: "Ezra Bridger" },
      { name: "Luke Skywalker" },
      { name: "Reva Sevander" }
    ]
  },
  {
    id: 4,
    hint: "Oldest padawan, you must find.",
    table: "padawans",
    expected_sql: "SELECT * FROM padawans ORDER BY age DESC LIMIT 1;",
    example_sql: "SELECT * FROM padawans ORDER BY age ASC LIMIT 1;",
    resulted_table: [
      {
        id: 9,
        name: "Yaddle",
        species: "Yoda's Species",
        age: 477,
        lightsaber_color: "Green"
      }
    ]
  }
];

export default data;
