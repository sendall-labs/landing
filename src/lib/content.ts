export const STATS = [
  { label: "Recipients per batch", value: "5,000" },
  { label: "Operations per transaction", value: "100" },
  { label: "Supported wallets", value: "6" },
  { label: "Networks", value: "Testnet & Mainnet" },
];

export const FEATURES = [
  {
    title: "On-chain address & trustline checks",
    description:
      "Every recipient is checked against Stellar RPC before you sign anything: invalid addresses, missing trustlines, and accounts that don't hold the minimum 1 XLM reserve are flagged upfront.",
  },
  {
    title: "Automatic transaction chunking",
    description:
      "Stellar caps a transaction at 100 operations. sendall splits large recipient lists into multiple transactions automatically and sequences them for you — no manual batching.",
  },
  {
    title: "Non-custodial by design",
    description:
      "Connect Freighter, xBull, Albedo, Lobstr, Rabet, or Hot Wallet. The server builds unsigned transactions only — your keys and your signature never leave your wallet.",
  },
  {
    title: "Status tracking & isolated retries",
    description:
      "Watch each payment's status live. If a transaction fails, retry only the failed recipients — successful payments from earlier attempts are never re-touched.",
  },
  {
    title: "XLM or any Stellar asset",
    description:
      "Send native XLM or any classic Stellar asset with a trustline, like USDC — just add the asset code and issuer.",
  },
  {
    title: "SEP-10-based sign-in",
    description:
      "Login is a real signed-challenge session (SIWS), not just a wallet connect — the challenge never touches the network, it only proves you hold the key.",
  },
];

export const STEPS = [
  {
    step: "1",
    title: "Sign in with your wallet",
    description:
      "A SEP-10-style signed challenge proves you hold the key — no account, no password, and nothing is submitted on-chain.",
  },
  {
    step: "2",
    title: "Upload a CSV",
    description:
      "List destination addresses, amounts, and optional memos — up to 5,000 rows per batch.",
  },
  {
    step: "3",
    title: "Review & check",
    description:
      "sendall validates every row and checks balances, trustlines, and the 1 XLM reserve for new accounts against the network.",
  },
  {
    step: "4",
    title: "Sign & send",
    description:
      "Recipients are chunked into ≤100-operation transactions. Approve each one in your wallet, then track status and retry any failures in isolation.",
  },
];
