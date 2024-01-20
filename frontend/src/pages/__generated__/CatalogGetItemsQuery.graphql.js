/**
 * @generated SignedSource<<223e48d8ba36456da738fa7ced578564>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "getItems",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "item_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CatalogGetItemsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CatalogGetItemsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1eff3cd3ea286c6de0961917c2944aa1",
    "id": null,
    "metadata": {},
    "name": "CatalogGetItemsQuery",
    "operationKind": "query",
    "text": "query CatalogGetItemsQuery {\n  getItems {\n    amount\n    description\n    image\n    item_id\n    price\n    title\n  }\n}\n"
  }
};
})();

node.hash = "6bcab0415a906aac654d4932dbfc91b1";

export default node;
