/**
 * @generated SignedSource<<ff4b57f6bdcec3467b88c367b9e1dd3e>>
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
        "concreteType": "CartItem",
        "kind": "LinkedField",
        "name": "cart_items",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "items_count",
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
    "name": "NavbarGetCartQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavbarGetCartQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "053dbad5eafaf487756b6e35a2c0601e",
    "id": null,
    "metadata": {},
    "name": "NavbarGetCartQuery",
    "operationKind": "query",
    "text": "query NavbarGetCartQuery(\n  $cart_id: ID!\n) {\n  getCart(cartID: $cart_id) {\n    cart_items {\n      items_count\n    }\n  }\n}\n"
  }
};
})();

node.hash = "b1871e410b08d569736fef450c64dd02";

export default node;
