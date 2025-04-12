[
    {
      "id": 1,
      "hint": "Young, the padawans are — less than 20, you seek.",
      "table": "padawans",
      "expected_sql": "SELECT * FROM padawans WHERE age < 20;"
    },
    {
      "id": 2,
      "hint": "The blue blade, only the worthy ignite.",
      "table": "padawans",
      "expected_sql": "SELECT name FROM padawans WHERE lightsaber_color = 'Blue';"
    },
    {
      "id": 3,
      "hint": "Human, the species must be. Reveal their names.",
      "table": "padawans",
      "expected_sql": "SELECT name FROM padawans WHERE species = 'Human';"
    },
    {
      "id": 4,
      "hint": "Oldest padawan, you must find.",
      "table": "padawans",
      "expected_sql": "SELECT * FROM padawans ORDER BY age DESC LIMIT 1;"
    }
]
  