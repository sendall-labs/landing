export const FIELD_NOTE = {
  label: "FIELD NOTES · BATCH #0417",
  paragraph:
    "214 recipients, paid monthly in USDC, one CSV. Row 87: a typo in the address, doesn't fail until the transaction's already built. Row 140: no trustline for the asset, so the payment doesn't bounce, it just never arrives. Row 203: a brand-new account, short of the 1 XLM reserve, fails too. 214 recipients needs at least three transactions. Stellar caps one at 100 operations. Transaction two lands. Transaction three times out. Now: which of the first 140 already got paid?",
  pivot: "Built after enough Tuesdays like that one.",
  alternative:
    "The alternative is usually a script somebody wrote once and is scared to touch, or handing a payout company your recipient list and your trust. Neither checks a trustline before it fails. Neither tells you which of 140 already got paid.",
};

export const PINNED = {
  label: "sendall",
  description:
    "Non-custodial bulk payments on Stellar. XLM or any trustline asset, up to 5,000 recipients per batch, on Testnet and Mainnet.",
};

export type LedgerStatus = "danger" | "warning" | "info";

export const LEDGER: {
  failure: string;
  fix: string;
  evidence: string;
  status: LedgerStatus;
}[] = [
  {
    failure:
      "A typo in one address. Usually fails a checksum, but not until the transaction's already built.",
    fix: "Every address is checked before you're asked to sign anything.",
    evidence: "GDXTY...F92K   invalid address",
    status: "danger",
  },
  {
    failure:
      "A recipient's wallet has no trustline for the asset. The payment doesn't fail, it just doesn't land.",
    fix: "Trustlines are checked per recipient against live chain state before you send.",
    evidence: "GBHF...9MXE   no trustline",
    status: "warning",
  },
  {
    failure: "A brand-new account needs 1 XLM before it can hold anything else.",
    fix: "New accounts are checked against the reserve automatically.",
    evidence: "GCFZ...JVJC   reserve short, needs 1 XLM",
    status: "warning",
  },
  {
    failure:
      "Stellar caps a transaction at 100 operations. Past that, you're splitting the batch and tracking chunks yourself.",
    fix: "Batches split into transactions of 100 operations or fewer, signed in order, automatically.",
    evidence: "transaction 3 of 14 — 100 operations",
    status: "info",
  },
  {
    failure:
      "One transaction in a large batch fails. Now you're checking the ledger by hand to see who got paid.",
    fix: "Every recipient's status is tracked on its own. Retry only touches what failed.",
    evidence: "op 47   failed, no trustline",
    status: "danger",
  },
  {
    failure: "A payout tool asking to hold your key, or a server signing on your behalf.",
    fix: "The server only builds unsigned transactions. Your wallet signs, locally, every time.",
    evidence: "Freighter — sign transaction 3 of 14",
    status: "info",
  },
];

export const SPEC = [
  { label: "Wallets", value: "Freighter, xBull, Albedo, Lobstr, Rabet, Hot Wallet" },
  { label: "Assets", value: "Native XLM, or any Stellar asset with a trustline (USDC, etc.)" },
  { label: "Networks", value: "Testnet, Mainnet" },
  { label: "Batch size", value: "Up to 5,000 recipients per file" },
  {
    label: "Operation limit",
    value: "100 per transaction, a Stellar protocol limit, split automatically",
  },
  {
    label: "Custody",
    value:
      "None. Login is a signed challenge. sendall only builds unsigned transactions. Your wallet signs.",
  },
];

export const FAQ = [
  {
    q: "What if my CSV has a mistake in it?",
    a: "You find out before it costs anything. Every row is checked against live chain state and shown in a table before you're asked to sign.",
  },
  {
    q: "What happens if a transaction fails partway through a large batch?",
    a: "Only that transaction's recipients are affected. Retry the failed rows on their own; nothing that already settled gets touched again.",
  },
  {
    q: "Does sendall ever hold my private key?",
    a: "No. Signing in is a signed challenge that proves you control the wallet without touching the chain. Every transaction is built unsigned and signed locally in your wallet.",
  },
  {
    q: "Can I test this before sending real funds?",
    a: "Yes. The same flow runs on Testnet: same validation, same chunking, same retries.",
  },
  {
    q: "What if I have more than 5,000 recipients?",
    a: "Split the list and run it as two batches. Validation and chunking work the same either way.",
  },
  {
    q: "What assets can I send?",
    a: "Native XLM, or any Stellar asset your recipients already hold a trustline for. Add the asset code and issuer.",
  },
];

export const CLOSE = {
  line: "The next batch doesn't have to be a Tuesday like that one.",
  sub: "Non-custodial. Testnet and Mainnet. Nothing gets signed until you're ready.",
};
