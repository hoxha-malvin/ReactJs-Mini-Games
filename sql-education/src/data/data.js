const data = [
  {
    id: 1,
    hint: "Wise, the elders are. Older than 100, find them you must.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE age > 100;",
    example_sql: `SQL accepts various inequality symbols, including:
= "equal to"
> "greater than"
< "less than"
>= "greater than or equal to"
<= "less than or equal to"

For example:
SELECT column_name FROM table_name WHERE column_name < value;`,
    resulted_table: [
      { name: "Yaddle" }
    ]
  },
  {
    id: 2,
    hint: "Masters, 40 years or more, they must be.",
    table: "padawans",
    expected_sql: "SELECT * FROM padawans WHERE age >= 40;",
    example_sql: `SQL allows you to filter records based on conditions using inequality symbols.

For example:
SELECT * FROM table_name WHERE column_name <= value;`,
    resulted_table: [
      { id: 7, name: "Kit Fisto", species: "Nautolan", age: 40, lightsaber_color: "Green" },
      { id: 8, name: "Plo Koon", species: "Kel Dor", age: 50, lightsaber_color: "Orange" },
      { id: 9, name: "Yaddle", species: "Yoda's Species", age: 477, lightsaber_color: "Green" }
    ]
  },
  /*{
    id: 3,
    hint: "Green blade, and Human — rare, that is.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE lightsaber_color = 'Green' AND species = 'Human';",
    example_sql: `You can combine multiple conditions using the AND keyword.

For example:
SELECT column_name FROM table_name WHERE condition1 AND condition2;`,
    resulted_table: [
      { name: "Luke Skywalker" }
    ]
  },
  {
    id: 4,
    hint: "Togruta or Zabrak — allies from distant worlds.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE species = 'Togruta' OR species = 'Zabrak';",
    example_sql: `In the WHERE part of a query, you can search for rows that match any of multiple attributes by using the OR keyword.

For example:
SELECT column_name FROM table_name WHERE condition1 OR condition2;`,
    resulted_table: [
      { name: "Ahsoka Tano" },
      { name: "Shaak Ti" },
      { name: "Eeth Koth" }
    ]
  },
  {
    id: 5,
    hint: "From many species they come — Togruta, Nautolan, Kel Dor.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE species IN ('Togruta', 'Nautolan', 'Kel Dor');",
    example_sql: `Using the WHERE clause, you can find rows where a value is in a list of several possible values.

For example:
SELECT column_name FROM table_name WHERE column_name IN (value1, value2, value3);`,
    resulted_table: [
      { name: "Ahsoka Tano" },
      { name: "Shaak Ti" },
      { name: "Kit Fisto" },
      { name: "Plo Koon" }
    ]
  },
  {
    id: 6,
    hint: "Different, the lightsaber colors are. List them, you must.",
    table: "padawans",
    expected_sql: "SELECT DISTINCT lightsaber_color FROM padawans;",
    example_sql: `By putting DISTINCT after SELECT, you prevent duplicates in the results.

For example:
SELECT DISTINCT column_name FROM table_name;`,
    resulted_table: [
      { lightsaber_color: "Green" },
      { lightsaber_color: "None" },
      { lightsaber_color: "Blue" },
      { lightsaber_color: "Red" },
      { lightsaber_color: "Orange" }
    ]
  },
  {
    id: 7,
    hint: "Begins with 'Lu', the name must. Seek them, you will.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE name LIKE 'Lu%';",
    example_sql: `LIKE lets you match patterns in text.
Use % as a wildcard for any sequence of characters.

For example:
SELECT column_name FROM table_name WHERE column_name LIKE 'prefix%';`,
    resulted_table: [
      { name: "Luke Skywalker" }
    ]
  },
  {
    id: 8,
    hint: "Ends with 'Ti', their names do. Find them, you must.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE name LIKE '%Ti';",
    example_sql: `Use % in LIKE to match any ending or beginning.

For example:
SELECT column_name FROM table_name WHERE column_name LIKE '%suffix';`,
    resulted_table: [
      { name: "Shaak Ti" }
    ]
  },
  {
    id: 9,
    hint: "Only one letter hidden, the name has. 'A_soka' it must match.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE name LIKE 'A_soka Tano';",
    example_sql: `The underscore _ matches exactly one character in LIKE patterns.

For example:
SELECT column_name FROM table_name WHERE column_name LIKE 'A_c%';`,
    resulted_table: [
      { name: "Ahsoka Tano" }
    ]
  },
  {
    id: 10,
    hint: "Mysterious is a name: '_i_ Fisto', it sounds.",
    table: "padawans",
    expected_sql: "SELECT name FROM padawans WHERE name LIKE '_i_ Fisto';",
    example_sql: `The _ symbol matches exactly one character, no more, no less.

For example:
SELECT column_name FROM table_name WHERE column_name LIKE '_a_';`,
    resulted_table: [
      { name: "Kit Fisto" }
    ]
  },
  {
    id: 11,
    hint: "The average age of Jedi learners, know it you must.",
    table: "padawans",
    expected_sql: "SELECT AVG(age) AS average_age FROM padawans;",
    example_sql: `Aggregate functions calculate values from multiple rows.
AVG returns the average.

For example:
SELECT AVG(column_name) FROM table_name;`,
    resulted_table: [
      { average_age: 123.5 }
    ]
  },
  {
    id: 12,
    hint: "The oldest, who is? Maximum age, find you shall.",
    table: "padawans",
    expected_sql: "SELECT MAX(age) AS oldest FROM padawans;",
    example_sql: `MAX returns the largest value in a column.

For example:
SELECT MAX(column_name) FROM table_name;`,
    resulted_table: [
      { oldest: 477 }
    ]
  },
  {
    id: 13,
    hint: "The youngest Padawan, curious you are.",
    table: "padawans",
    expected_sql: "SELECT MIN(age) AS youngest FROM padawans;",
    example_sql: `MIN returns the smallest value in a column.

For example:
SELECT MIN(column_name) FROM table_name;`,
    resulted_table: [
      { youngest: 20 }
    ]
  },
  {
    id: 14,
    hint: "Total the ages, for strength in numbers there is.",
    table: "padawans",
    expected_sql: "SELECT SUM(age) AS total_age FROM padawans;",
    example_sql: `SUM adds all values in a numeric column.

For example:
SELECT SUM(column_name) FROM table_name;`,
    resulted_table: [
      { total_age: 987 }
    ]
  }*/
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