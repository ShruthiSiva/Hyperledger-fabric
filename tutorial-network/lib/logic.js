
/**
 * Transacting a good between two parties
 * @param {org.example.mynetwork.Trade} trade - trade to be executed
 * @transaction
 */
async function sampleTransaction(trade) {
    trade.commodity.owner = trade.newOwner
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Commodity');
    await assetRegistry.update(trade.commodity);
}
