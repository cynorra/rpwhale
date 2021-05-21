export class PoolConfig {
  id: string;
  staked: number;
  pending_staked: number;
  stock: string;
  fraction: string;
  enabled: number;
}

export class AccountCollectionStaking {
  collection: string;
  user: string;
  staked: number;
  collected: string;
  miningPower?: number;
}

export class WaxPrice {
  wax: {
    usd: number;
  }
}

export class AetherPrice {
  last_price: number;
}