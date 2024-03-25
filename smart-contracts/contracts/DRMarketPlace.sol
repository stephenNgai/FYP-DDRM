// SPEX-License-Identifer: MIT
pragma solidity ^0.8.0;

error DRMarketplace_PriceMustBeGreaterThanZero();

contract DRMarketplace {
    function listItem(
        address drAddress,
        uint256 tokenID,
        uint256 price
    ) external {
        if (price <= 0) {
            revert DRMarketplace_PriceMustBeGreaterThanZero();
        }
    }
}

//     1. `listItem`: List DR on the marketplace
//    2. `buyItem`: Buy the DR
//    3. `cancelItem`: Cancel a listing
//    4. `updateListing`: Update Price
//    5. `withdrawProceeds`: Withdraw payment for my bought DRs
