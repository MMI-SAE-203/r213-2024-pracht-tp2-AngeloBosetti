/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n3n0ctnb4ccr7t")

  // remove
  collection.schema.removeField("vmv9e2qw")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n3n0ctnb4ccr7t")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
