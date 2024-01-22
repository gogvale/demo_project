/**
 * @generated SignedSource<<28d79004c351c135487ec5e63bf56b58>>
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
  "name": "cartItemID"
},
v2 = [
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
        "name": "cartItemID",
        "variableName": "cartItemID"
      }
    ],
    "kind": "ScalarField",
    "name": "updateCartItem",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CartItemUpdateCartItemMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CartItemUpdateCartItemMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5e36315d7ece6830e6edfd61f39c8536",
    "id": null,
    "metadata": {},
    "name": "CartItemUpdateCartItemMutation",
    "operationKind": "mutation",
    "text": "mutation CartItemUpdateCartItemMutation(\n  $cartItemID: ID!\n  $amount: Int!\n) {\n  updateCartItem(cartItemID: $cartItemID, amount: $amount)\n}\n"
  }
};
})();

node.hash = "07d3bfe3436e458a337e1e8b8677751a";

export default node;
