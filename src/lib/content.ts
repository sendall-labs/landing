export const HERO = {
  headline: "Send Stellar payments to thousands of people at once",
  subhead:
    "Upload a list of addresses and amounts. sendall checks every address, groups them into transactions automatically, and sends, all signed from your own wallet.",
};

export const STEPS = [
  {
    step: "1",
    title: "Add your recipients",
    description: "Paste or upload a CSV with destination addresses and amounts.",
  },
  {
    step: "2",
    title: "Address format is checked",
    description:
      "Every address is validated against the Stellar format before anything else happens.",
  },
  {
    step: "3",
    title: "Active accounts are confirmed",
    description:
      "Each address is checked on-chain to make sure it can actually receive the payment.",
  },
  {
    step: "4",
    title: "Payments are batched and sent",
    description:
      "Recipients are grouped into transactions automatically. You approve once per group, in your own wallet.",
  },
];

export const BENEFITS = [
  {
    title: "No manual checking",
    description:
      "Every address and account is verified automatically, before you send anything.",
  },
  {
    title: "Built for scale",
    description:
      "Send to hundreds or thousands of recipients without batching transactions yourself.",
  },
  {
    title: "You stay in control",
    description:
      "sendall never holds your funds or your keys. Every payment is signed in your own wallet.",
  },
  {
    title: "No platform fees",
    description:
      "You only pay the Stellar network's own fee, a fraction of a cent per transaction. sendall doesn't add a service fee on top.",
  },
];

export const SECURITY = {
  title: "Your funds, your keys",
  description:
    "sendall builds each transaction but never signs it. You approve every payment yourself, from a wallet you already trust.",
};

export const WALLETS = ["Freighter", "xBull", "Albedo", "Lobstr", "Rabet", "Hot Wallet"];

export const CLOSE = {
  line: "Ready to send your first batch?",
  sub: "Connect your wallet and upload a recipient list to get started.",
};

export const SPEC_NOTE =
  "Works on Testnet for trying it out, and on Mainnet for real payments. Up to 5,000 recipients per batch.";
