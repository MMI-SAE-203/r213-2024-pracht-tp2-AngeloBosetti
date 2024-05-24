/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6n3n0ctnb4ccr7t",
    "created": "2024-04-12 12:33:03.869Z",
    "updated": "2024-04-12 12:33:03.869Z",
    "name": "agent",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l8arsig9",
        "name": "nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "7o9sgah0",
        "name": "prenom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ci9byddm",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "vmv9e2qw",
        "name": "numero_telephone",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6n3n0ctnb4ccr7t");

  return dao.deleteCollection(collection);
})
