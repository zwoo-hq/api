# @zwoo/api-zrp

A ZRP implementation in TypeScript.

![@zwoo/api-zrp](https://img.shields.io/npm/v/@zwoo/api-zrp?style=for-the-badge&label=@zwoo/api-zrp)
![license](https://img.shields.io/github/license/zwoo-hq/api?style=for-the-badge)
![issues](https://img.shields.io/github/issues/zwoo-hq/api?style=for-the-badge)

## Quickstart

Install the package via npm/yarn/pnpm:

```bash
npm i @zwoo/api-zrp
yarn add @zwoo/api-zrp
pnpm add @zwoo/api-zrp
```

## Usage

There a few main parts to use:
 
- `ZRPCoder`: The coder is used to encode and decode messages.
- `ZRPMessageBuilder`: The message builder is used to build messages.

All payload types are strongly typed using typescript based on the ZRPCode.
These utility types are also exported:

- `ZRPMessage<ZRPCode>`: a typed message with the correct payload type for the code
- `ZRPMessage<T>`: a typed message with a custom payload type
- `ZRPPayload`: a utility to get the payload type for a zrp code


## Example

```typescript
import { ZRPCoder, ZRPMessageBuilder } from '@zwoo/api-zrp';

const { code, payload } = ZRPCoder.decode('...raw zrp message...');
const message = ZRPMessageBuilder.build(ZRPCode, { ... })
const rawMessage = ZRPCoder.encode(message);
```
