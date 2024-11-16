import { ZRPMessage } from "./types";

export class ZRPCoder {
  private static DecodeRegex = /(?<code>[0-9]{3}),(?<data>.*)/;

  static decode(msg: string): ZRPMessage {
    const result = this.DecodeRegex.exec(msg);
    if (!result?.groups) throw new Error("no regex match");
    const { code, data } = result.groups;
    const numericCode = parseInt(code, 10);
    if (isNaN(numericCode)) throw new Error("invalid opcode");
    return {
      code: numericCode,
      data: JSON.parse(data),
    };
  }

  static encode(msg: ZRPMessage): string {
    return `${msg.code.toString().padStart(3, "0")},${ZRPCoder.encodePayload(
      msg.data
    )}`;
  }

  static encodePayload<T>(content: T): string {
    return JSON.stringify(content);
  }
}
