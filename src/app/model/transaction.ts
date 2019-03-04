export class Transaction {
  _id?: string;
  lastName?: string;
  firstName?: string;
  birthDate?: Date;
  phone?: string;
  identity?: string;
  address?: string;
  receiverBank?: string;
  receiverName?: string;
  receiverAccount?: string;
  receiveAmount?: number;
  receiveCurrency?: string;
  payAmount?: number;
  payCurrency?: string;
  rate?: number;
  fee?: number;
  createDate?: Date;
}
