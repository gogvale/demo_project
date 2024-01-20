/**
 * @generated SignedSource<<4f98b2ed4d0fbd4241e6d76d347c5683>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "item_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "item_id",
        "variableName": "item_id"
      }
    ],
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "getItem",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemGetItemQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemGetItemQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7cfe14e7ad2691d6448d58faa3820d36",
    "id": null,
    "metadata": {},
    "name": "ItemGetItemQuery",
    "operationKind": "query",
    "text": "query ItemGetItemQuery(\n  $item_id: ID!\n) {\n  getItem(item_id: $item_id) {\n    amount\n    description\n    image\n    price\n    title\n  }\n}\n"
  }
};
})();

node.hash = "f6595a1b5face7afc31fbc6d019b1565";

export default node;
