# Zwoo.Api.ZRP

A ZRP implementation in C#.

![Zwoo.Api.ZRP](https://img.shields.io/nuget/v/Zwoo.Api.ZRP?style=for-the-badge&label=Zwoo.Api.ZRP)
![license](https://img.shields.io/github/license/zwoo-hq/api?style=for-the-badge)
![issues](https://img.shields.io/github/issues/zwoo-hq/api?style=for-the-badge)

## Quickstart

Install the package:

```bash
dotnet add package Zwoo.Api.ZRP
```

## Usage

There a few main parts to use:

- `ZRPDecoder`: a decoder to decode zrp messages.
- `ZRPEncoder`: an encoder to encode zrp messages.
- `ZRPSerializerContext`: a JSONSerializerContext be used in AOT scenarios.

## Example

```csharp
using Zwoo.Api.ZRP;

var (code, payload) = ZRPDecoder.Decode("...raw zrp message..."); // or: DecodeFromBytes()
string message = ZRPMessageBuilder.Encode(ZRPCode, new PlayerJoinedNotification()); // or: EncodeToBytes()