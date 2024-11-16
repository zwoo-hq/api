import { ZRPCode } from "./code";
import { ZRPMessage, ZRPPayloadMap } from "./types";

export class ZRPMessageBuilder {
  static build<C extends ZRPCode>(
    code: C,
    payload: ZRPPayloadMap[C]
  ): ZRPMessage<C> {
    return {
      code: code,
      data: payload,
    } as ZRPMessage<C>;
  }
}
