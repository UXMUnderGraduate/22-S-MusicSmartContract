import * as ca from "./contracts.js";
ca.init().then(() => {
  document
    .querySelector(".deployContracts")
    .addEventListener("click", async () => {
      await ca.init();
      console.log("deployContracts button clicked");
      // deploy SettlementContract
      const addresses = [
        "0x1Fb5Fd68e9b34F8aF64d3B5e2D80ad9Df96F703B",
        "0x9ba5f78235AB268e92615a2370a81aBB2E79C9eb",
      ];
      const proportions = [5000, 5000];
      const SongCid = "QmWZipPtKnuVkn1mwNMqEw8apx513me2B3aCByCchsCmHk";
      const price = "90000000000000000";
      const settlementContractInstance = await ca.deployContract.settlement(
        addresses,
        proportions,
        SongCid,
        price
      );
      console.log("settlementContract deployed");
      // set settlementContract instance
      ca.settlementContract.load(settlementContractInstance.options.address);
      console.log("deployContract done");
    });

  document.querySelector(".buy").addEventListener("click", async () => {
    await ca.init();
    const result = await ca.settlementContract.buy();
    console.log(`buy() Transaction: ${result.transactionHash}`);
  });

  document.querySelector(".settle").addEventListener("click", async () => {
    await ca.init();
    const result = await ca.settlementContract.settle();
    console.log(`settle() Transaction: ${result.transactionHash}`);
  });
});
