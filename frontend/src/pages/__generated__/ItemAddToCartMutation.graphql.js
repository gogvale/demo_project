/**
 * @generated SignedSource<<40d32249b1102117c734e577b22aa0f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "amount"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cartID"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "itemID"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "amount",
        "variableName": "amount"
      },
      {
        "kind": "Variable",
        "name": "cartID",
        "variableName": "cartID"
      },
      {
        "kind": "Variable",
        "name": "itemID",
        "variableName": "itemID"
      }
    ],
    "kind": "ScalarField",
    "name": "addToCart",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemAddToCartMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemAddToCartMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "012e4ecb139c81357180f94e8540d83f",
    "id": null,
    "metadata": {},
    "name": "ItemAddToCartMutation",
    "operationKind": "mutation",
    "text": "mutation ItemAddToCartMutation(\n  $cartID: ID!\n  $itemID: ID!\n  $amount: Int!\n) {\n  addToCart(cartID: $cartID, itemID: $itemID, amount: $amount)\n}\n"
  }
};
})();

node.hash = "10e2ae41c765a198a157d27e4a14e01a";

export default node;
