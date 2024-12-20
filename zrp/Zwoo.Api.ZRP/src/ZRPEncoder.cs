using System.Text;
using System.Text.Json;

namespace Zwoo.Api.ZRP;

public class ZRPEncoder
{
    private static ZRPSerializerContext _context = new ZRPSerializerContext(new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    });

    static public string Encode<T>(ZRPCode code, T payload)
    {
        return $"{(int)code},{EncodePayload(payload)}";
    }

    static public string EncodePayload<T>(T payload)
    {
        return JsonSerializer.Serialize(payload, typeof(T), _context);
    }

    static public byte[] EncodeToBytes<T>(ZRPCode code, T payload)
    {
        return Encoding.UTF8.GetBytes(Encode(code, payload));
    }
}
