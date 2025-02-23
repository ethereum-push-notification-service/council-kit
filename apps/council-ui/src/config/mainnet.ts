import { CouncilConfig } from "src/config/CouncilConfig";

export const mainnetCouncilConfig: CouncilConfig = {
  version: "",
  chainId: 1,
  timelock: {
    address: "0x81758f3361A769016eae4844072FA6d7f828a651",
  },
  coreVoting: {
    name: "Core Voting",
    address: "0xEaCD577C3F6c44C3ffA398baaD97aE12CDCFed4a",
    descriptionURL: "https://moreinfo.com",
    vaults: [
      {
        name: "Locking Vault",
        sentenceSummary:
          "Allows users to deposit their tokens in exchange for voting power, which can also be delegated to a different user.",
        paragraphSummary:
          "Allows users to deposit their tokens in exchange for voting power, which can also be delegated to a different user.",
        address: "0x02Bd4A3b1b95b01F2Aa61655415A5d3EAAcaafdD",
        type: "FrozenLockingVault",
        descriptionURL: "https://moreinfo.com",
      },
      {
        name: "Vesting Vault",
        address: "0x6De73946eab234F1EE61256F10067D713aF0e37A",
        sentenceSummary:
          "Allows locked / vesting positions to still have voting power in the governance system by using a defined multiplier for the vested tokens over unvested.",
        paragraphSummary:
          "Allows locked / vesting positions to still have voting power in the governance system by using a defined multiplier for the vested tokens over unvested.",
        type: "VestingVault",
        descriptionURL: "https://moreinfo.com",
      },
    ],
    proposals: {
      0: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
      },
      1: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
        title: "EGP-2: Increase GSC quorum threshold",
        sentenceSummary: "Increase the current GSC quroum threshold to 3.",
        paragraphSummary:
          "As of today (April 28, 2022) there has only been one delegate (myself) who has proven their membership to the GSC on-chain. In roughly five days I will be able to pass votes by myself with no further approval because the current quroum threshold on the GSC is one. I believe that no one person should be able to govern the GSC by themselves, and thus I am proposing to effectively lock the GSC until two other delegates join the GSC. Three was chosen as a starting point for one reason, to break a tie. As more delegates join, I'm sure this value will gradually increase but for the time being, a threshold of three will be adequate to ensure some level of participation.",
      },
      2: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
        title: "EGP-15: Element Fixed Borrow Protocol Grant Proposal (Old)",
        sentenceSummary:
          "Component is proposing a 274,414.06 ELFI voting token grant to build a fixed borrow protocol on top of Element Finance and for building the YTC tool.",
        paragraphSummary:
          "The proceeds of this grant will enable us to build a protocol offering competitive, low-cost, fixed-rate borrowing on Compound Finance and Aave. Component has been an active contributor to Element Finance since early 2021 and will continue to launch new integrations for fixed rates on Element Finance. This grant ensures a long term relationship where Component will be part of growing, generating revenue and decentralizing the Element DAO.",
      },
      3: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
        title: "EGP-15: Element Fixed Borrow Protocol Grant Proposal",
        sentenceSummary:
          "Component is proposing a 274,414.06 ELFI voting token grant to build a fixed borrow protocol on top of Element Finance and for building the YTC tool.",
        paragraphSummary:
          "The proceeds of this grant will enable us to build a protocol offering competitive, low-cost, fixed-rate borrowing on Compound Finance and Aave. Component has been an active contributor to Element Finance since early 2021 and will continue to launch new integrations for fixed rates on Element Finance. This grant ensures a long term relationship where Component will be part of growing, generating revenue and decentralizing the Element DAO.",
      },
    },
  },

  gscVoting: {
    name: "GSC",
    address: "0x40309f197e7f94B555904DF0f788a3F48cF326aB",
    descriptionURL: "https://moreinfo.com",
    vaults: [
      {
        name: "GSC Vault",
        address: "0xcA870E8aa4FCEa85b5f0c6F4209C8CBA9265B940",
        type: "GSCVault",

        sentenceSummary:
          "The Governance Steering Council (GSC) vault gives one vote to each member that has surpassed a pre-established threshold of delegated Voting Power defined by the DAO.",
        paragraphSummary:
          "The Governance Steering Council (GSC) vault gives one vote to each member that has surpassed a pre-established threshold of delegated Voting Power defined by the DAO. Members of the council can create, vote, and execute proposals if the GSC quorum is met, with quorum set by the DAO.",
        descriptionURL: "https://moreinfo.com",
      },
    ],
    proposals: {
      0: { descriptionURL: "", targets: [], calldatas: [] },
      1: { descriptionURL: "", targets: [], calldatas: [] },
    },
  },

  /**
   * Optional Push integration
   */
  push: {
    channel: "0x349da2A6825284E9E181D46D664b95aecE86da56",
    env: "prod",
  },
};
