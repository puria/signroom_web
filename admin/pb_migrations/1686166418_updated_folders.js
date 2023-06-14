migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ip8tasgt",
    "name": "signatures",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x5wmmdzrliioltm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("trb79bav1z4vowl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ip8tasgt",
    "name": "sognatures",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "x5wmmdzrliioltm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
