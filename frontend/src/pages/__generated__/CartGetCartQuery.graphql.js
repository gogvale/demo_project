/**
 * @generated SignedSource<<2598f61c7f6085ab6044a4c3c93a6cd5>>
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
    "name": "cart_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cartID",
        "variableName": "cart_id"
      }
    ],
    "concreteType": "Cart",
    "kind": "LinkedField",
    "name": "getCart",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "subtotal",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CartItem",
        "kind": "LinkedField",
        "name": "cart_items",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cart_item_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "items_count",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "total",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
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
                "name": "image",
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
        ],
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
    "name": "CartGetCartQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CartGetCartQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42df8ba5a6becc773add5e437ce5e37f",
    "id": null,
    "metadata": {},
    "name": "CartGetCartQuery",
    "operationKind": "query",
    "text": "query CartGetCartQuery(\n  $cart_id: ID!\n) {\n  getCart(cartID: $cart_id) {\n    subtotal\n    cart_items {\n      cart_item_id\n      items_count\n      total\n      item {\n        amount\n        image\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "36ba1b8d431cf9eb376d41e0fec74960";

export default node;
