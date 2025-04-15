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
  },
  {
    id: 5,
    hint: "Red, the blade must be. Dangerous, they are.",
    table: "padawans",
    expected_sql: "SELECT * FROM padawans WHERE lightsaber_color = 'Red';",
    example_sql: "SELECT * FROM padawans WHERE lightsaber_color = 'Green';",
    resulted_table: [
      { id: 5, name: "Reva Sevander", species: "Human", age: 25, lightsaber_color: "Red" }
    ]
  },
  {
    id: 6,
    hint: "Wise, the elders are. Older than 100, find them you must.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE age > 100;",
    example_sql: "SELECT name FROM padawans WHERE age < 100;",
    resulted_table: [
      { name: "Yaddle" }
    ]
  },
  {
    id: 7,
    hint: "Masters, 40 years or more, they must be.",
    table: "padawans",
    expected_sql: "SELECT * FROM padawans WHERE age >= 40;",
    example_sql: "SELECT * FROM padawans WHERE age <= 40;",
    resulted_table: [
      { id: 7, name: "Kit Fisto", species: "Nautolan", age: 40, lightsaber_color: "Green" },
      { id: 8, name: "Plo Koon", species: "Kel Dor", age: 50, lightsaber_color: "Orange" },
      { id: 9, name: "Yaddle", species: "Yoda's Species", age: 477, lightsaber_color: "Green" }
    ]
  },
  {
    id: 8,
    hint: "Green blade, and Human — rare, that is.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE lightsaber_color = 'Green' AND species = 'Human';",
    example_sql: "SELECT name FROM padawans WHERE lightsaber_color = 'Green';",
    resulted_table: [
      { name: "Luke Skywalker" }
    ]
  },
  {
    id: 9,
    hint: "Togruta or Zabrak — allies from distant worlds.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE species = 'Togruta' OR species = 'Zabrak';",
    example_sql: "SELECT name FROM padawans WHERE species = 'Togruta';",
    resulted_table: [
      { name: "Ahsoka Tano" },
      { name: "Shaak Ti" },
      { name: "Eeth Koth" }
    ]
  },
  {
    id: 10,
    hint: "From many species they come — Togruta, Nautolan, Kel Dor.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE species IN ('Togruta', 'Nautolan', 'Kel Dor');",
    example_sql: "SELECT name FROM padawans WHERE species IN ('Human');",
    resulted_table: [
      { name: "Ahsoka Tano" },
      { name: "Shaak Ti" },
      { name: "Kit Fisto" },
      { name: "Plo Koon" }
    ]
  },
  {
    id: 11,
    hint: "Different, the lightsaber colors are. List them, you must.",
    table: "padawans",
    expected_sql: "SELECT DISTINCT lightsaber_color FROM padawans;",
    example_sql: "SELECT lightsaber_color FROM padawans;",
    resulted_table: [
      { lightsaber_color: "Green" },
      { lightsaber_color: "None" },
      { lightsaber_color: "Blue" },
      { lightsaber_color: "Red" },
      { lightsaber_color: "Orange" }
    ]
  } 
];



export const dialogues = [
  {
    speaker: "vader",
    text: "You are trapped in the SQL prison. You can't escape."
  },
  {
    speaker: "yoda",
    text: "Simple, the path may not be. But impossible, it is not.",
  },
  {
    speaker: "vader",
    text: "The only way forward is through knowledge... of SQL.",
  },
  {
    speaker: "yoda",
    text: "Strong in the database, one must be. Or trapped, one will stay.",
  },
  {
    speaker: "vader",
    text: "Fail, and you will remain in my grasp forever. As others have before you.",
  },
  {
    speaker: "yoda",
    text: "Believe in the code, young learner. The Force is with you.",
  },
  {
    speaker: "yoda",
    text: "Your journey begins. Solve, you must, to be free.",
  },
];

export default data;