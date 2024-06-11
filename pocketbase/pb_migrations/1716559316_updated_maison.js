/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0bdxa1y89zuwxrj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r9dney0q",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "6n3n0ctnb4ccr7t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0bdxa1y89zuwxrj")

  // remove
  collection.schema.removeField("r9dney0q")

  return dao.saveCollection(collection)
})
