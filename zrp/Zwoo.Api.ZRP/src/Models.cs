namespace Zwoo.Api.ZRP;

public static class ZRPVersion
{
    public static readonly string CURRENT = "5.0.0";
}

/// <summary>
/// ZRPCode: 100 
/// </summary>
public readonly record struct PlayerJoinedNotification(long Id, string Username, double Score, bool IsBot);

/// <summary>
/// ZRPCode: 101
/// </summary>
public readonly record struct SpectatorJoinedNotification(long Id, string Username);

/// <summary>
/// ZRPCode: 102
/// </summary>
public readonly record struct PlayerLeftNotification(long Id);

/// <summary>
/// ZRPCode: 103 
/// </summary>
public readonly record struct SpectatorLeftNotification(long Id);

/// <summary>
/// ZRPCode: 104
/// </summary>
public readonly record struct ChatMessageEvent(string Message);

/// <summary>
/// ZRPCode: 105
/// </summary>
public readonly record struct ChatMessageNotification(long Id, string Message);

/// <summary>
/// ZRPCode: 106
/// </summary>
public readonly record struct LeaveEvent(); // empty

/// <summary>
/// ZRPCode: 108
/// @link 109
/// </summary>
public readonly record struct GetLobbyEvent(); // empty

/// <see cref="SendLobbyNotification"/>
public readonly record struct SendLobby_PlayerDTO(long Id, string Username, ZRPRole Role, ZRPPlayerState State, double Score);

/// <summary>
/// ZRPCode: 109
/// @link 108
/// </summary>
public readonly record struct SendLobbyNotification(SendLobby_PlayerDTO[] Players);

/// <summary>
/// ZRPCode: 110
/// </summary>
public readonly record struct SpectatorToPlayerEvent(); // empty

/// <summary>
/// ZRPCode: 111
/// </summary>
public readonly record struct PlayerToSpectatorEvent(long Id);

/// <summary>
/// ZRPCode: 112
/// </summary>
public readonly record struct PlayerToHostEvent(long Id);

/// <summary>
/// ZRPCode: 113
/// </summary>
public readonly record struct YouAreHostNotification(); // empty

/// <summary>
/// ZRPCode: 114
/// </summary>
public readonly record struct NewHostNotification(long Id);

/// <summary>
/// ZRPCode: 115
/// </summary>
public readonly record struct KickPlayerEvent(long Id);

/// <summary>
/// ZRPCode: 116
/// </summary>
public readonly record struct PlayerChangedRoleNotification(long Id, ZRPRole Role, double Score);

/// <summary>
/// ZRPCode: 117
/// </summary>
public readonly record struct PlayerDisconnectedNotification(long Id);

/// <summary>
/// ZRPCode: 118
/// </summary>
public readonly record struct PlayerReconnectedNotification(long Id);

/// <summary>
/// ZRPCode: 198
/// </summary>
public readonly record struct KeepAliveEvent(); // empty

/// <summary>
/// ZRPCode: 199
/// @link 198
/// </summary>
public readonly record struct AckKeepAliveNotification(); // empty

/// <summary>
/// ZRPCode: 200
/// </summary>
public readonly record struct UpdateSettingEvent(string Setting, int Value);

/// <summary>
/// ZRPCode: 201
/// </summary>
public readonly record struct SettingChangedNotification(string Setting, int Value);

/// <summary>
/// ZRPCode: 202
/// </summary>
public readonly record struct GetSettingsEvent(); // empty

/// <see cref="AllSettingsNotification" />
public readonly record struct AllSettings_SettingDTO(string Setting, int Value, Dictionary<string, string> Title, Dictionary<string, string> Description, SettingsType Type, bool IsReadonly, int? Min, int? Max);

/// <summary>
/// ZRPCode: 203
/// </summary>
public readonly record struct AllSettingsNotification(AllSettings_SettingDTO[] Settings);


/// <summary>
/// ZRPCode: 210
/// </summary>
public readonly record struct StartGameEvent(); // empty

/// <see cref="CreateBotEvent" />
/// <see cref="UpdateBotEvent" />
/// <see cref="SendBots_BotDTO" />
public readonly record struct BotConfigDTO(int Type);

/// <summary>
/// ZRPCode: 230
/// </summary>
public readonly record struct CreateBotEvent(string Username, BotConfigDTO Config);

/// <summary>
/// ZRPCode: 231
/// </summary>
public readonly record struct BotJoinedNotification(long Id, string Username, double Score);

/// <summary>
/// ZRPCode: 232
/// </summary>
public readonly record struct BotLeftNotification(long Id);

/// <summary>
/// ZRPCode: 233
/// </summary>
public readonly record struct UpdateBotEvent(long Id, BotConfigDTO Config);

/// <summary>
/// ZRPCode: 235
/// </summary>
public readonly record struct DeleteBotEvent(long Id);

/// <summary>
/// ZRPCode: 236
/// </summary>
public readonly record struct GetBotsEvent();

/// <see cref="SendBotsNotification" />
public readonly record struct SendBots_BotDTO(long Id, string Username, BotConfigDTO Config, double Score);

/// <summary>
/// ZRPCode: 237
/// </summary>
public readonly record struct SendBotsNotification(SendBots_BotDTO[] Bots);

/// <summary>
/// ZRPCode: 300
/// </summary>
public readonly record struct GameStartedNotification(Card[] Hand, SendPlayerState_PlayerDTO[] Players, Card Pile); // empty

/// <summary>
/// ZRPCode: 301
/// </summary>
public readonly record struct StartTurnNotification(); // empty

/// <summary>
/// ZRPCode: 302
/// </summary>
public readonly record struct EndTurnNotification(); // empty

/// <summary>
/// ZRPCode: 303
/// </summary>
public readonly record struct RequestEndTurnEvent(); // empty

/// <summary>
/// ZRPCode: 304
/// </summary>
public readonly record struct PlaceCardEvent(Card Card);

/// <summary>
/// ZRPCode: 305
/// </summary>
public readonly record struct DrawCardEvent(); // empty


/// <summary>
/// ZRPCode: 306
/// </summary>
public readonly record struct SendCardsNotification(Card[] Cards);


/// <summary>
/// ZRPCode: 307
/// </summary>
public readonly record struct RemoveCardNotification(Card[] Cards);



/// <see cref="StateUpdateNotification" />
public readonly record struct StateUpdate_FeedbackDTO(UIFeedbackType Type, UIFeedbackKind Kind, Dictionary<string, long> Args);

/// <summary>
/// ZRPCode: 308
/// </summary>
public readonly record struct StateUpdateNotification(
    Card PileTop,
    long ActivePlayer,
    Dictionary<long, int> CardAmounts,
    List<StateUpdate_FeedbackDTO> Feedback,
    int? CurrentDrawAmount
);

/// <summary>
/// ZRPCode: 310
/// </summary>
public readonly record struct GetDeckEvent(); // empty

/// <summary>
/// ZRPCode: 311
/// </summary>
public readonly record struct SendDeckNotification(Card[] Hand);

/// <summary>
/// ZRPCode: 312
/// </summary>
public readonly record struct GetPlayerStateEvent(); // empty

/// <see cref="SendPlayerStateNotification" />
public readonly record struct SendPlayerState_PlayerDTO(
    long Id,
    string Username,
    int Cards,
    int Order,
    bool IsActivePlayer
);

/// <summary>
/// ZRPCode: 313
/// </summary>
public readonly record struct SendPlayerStateNotification(SendPlayerState_PlayerDTO[] Players);

/// <summary>
/// ZRPCode: 314
/// </summary>
public readonly record struct GetPileTopEvent(); // empty

/// <summary>
/// ZRPCode: 315
/// </summary>
public readonly record struct SendPileTopNotification(Card Card);

/// <summary>
/// ZRPCode: 316
/// </summary>
public readonly record struct GetPlayerDecisionNotification(int Type, List<string> Options);

/// <summary>
/// ZRPCode: 317
/// </summary>
public readonly record struct PlayerDecisionEvent(int Type, int Decision);

/// <see cref="PlayerWonNotification" />
public readonly record struct PlayerWon_PlayerSummaryDTO(
    long Id,
    int Position,
    int Score
);

/// <summary>
/// ZRPCode: 399
/// </summary>
public readonly record struct PlayerWonNotification(
    long Id,
    PlayerWon_PlayerSummaryDTO[] Summary
);

/// <summary>
/// ZRPCode: 400
/// </summary>
public readonly record struct Error(int Code, string Message);

/// <summary>
/// ZRPCode: 401
/// </summary>
public readonly record struct MessageTooLongError(int Code, string Message);

/// <summary>
/// ZRPCode: 420
/// </summary>
public readonly record struct AccessDeniedError(int Code, string Message);

/// <summary>
/// ZRPCode: 421
/// </summary>
public readonly record struct LobbyFullError(int Code, string Message);

/// <summary>
/// ZRPCode: 425
/// </summary>
public readonly record struct BotNameExistsError(int Code, string Message);

/// <summary>
/// ZRPCode: 426
/// </summary>
public readonly record struct EmptyPileError(int Code, string Message);

/// <summary>
/// ZRPCode: 434
/// </summary>
public readonly record struct PlaceCardError(int Code, string Message);


