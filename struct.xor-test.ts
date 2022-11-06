import { XOR } from './struct.xor';

interface VIP {
  vipExpires: number;
}

interface CommonUser {
  promotionUsed: boolean;
}

type User = VIP | CommonUser;

type XORUser = XOR<VIP, CommonUser>;

const u1: XORUser = {
  vipExpires: 0,
};

const u2: XORUser = {};

const u3: XORUser = {
  promotionUsed: false,
  vipExpires: 0,
};
