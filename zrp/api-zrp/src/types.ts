import { ZRPCode } from "./code";
import {
  AccessDeniedError,
  AckKeepAliveNotification,
  SendBotsNotification,
  AllSettingsNotification,
  BotJoinedNotification,
  BotLeftNotification,
  BotNameExistsError,
  ChatMessageEvent,
  ChatMessageNotification,
  CreateBotEvent,
  DeleteBotEvent,
  DrawCardEvent,
  EmptyPileError,
  EndTurnNotification,
  Error,
  GameStartedNotification,
  GetBotsEvent,
  GetDeckEvent,
  GetLobbyEvent,
  SendLobbyNotification,
  GetPileTopEvent,
  GetPlayerDecisionNotification,
  GetPlayerStateEvent,
  GetSettingsEvent,
  KeepAliveEvent,
  KickPlayerEvent,
  LobbyFullError,
  MessageTooLongError,
  NewHostNotification,
  PlaceCardError,
  PlaceCardEvent,
  PlayerChangedRoleNotification,
  PlayerDecisionEvent,
  PlayerDisconnectedNotification,
  PlayerJoinedNotification,
  PlayerLeftNotification,
  PlayerReconnectedNotification,
  PlayerToHostEvent,
  PlayerToSpectatorEvent,
  PlayerWonNotification,
  RemoveCardNotification,
  RequestEndTurnEvent,
  SendCardsNotification,
  SendDeckNotification,
  SendPileTopNotification,
  SendPlayerStateNotification,
  SettingChangedNotification,
  SpectatorJoinedNotification,
  SpectatorLeftNotification,
  SpectatorToPlayerEvent,
  StartGameEvent,
  StartTurnNotification,
  StateUpdateNotification,
  UpdateBotEvent,
  UpdateSettingEvent,
  YouAreHostNotification,
  LeaveEvent,
} from "./models";

export type ZRPMessage<T extends unknown | ZRPCode = Record<string, unknown>> =
  T extends ZRPCode
    ? {
        code: T;
        data: ZRPPayloadMap[T];
      }
    : {
        code: ZRPCode;
        data: T;
      };

export type ZRPPayload<T extends ZRPCode> = ZRPPayloadMap[T];

export type ZRPPayloadMap = {
  // General
  [ZRPCode.PlayerJoined]: PlayerJoinedNotification;
  [ZRPCode.SpectatorJoined]: SpectatorJoinedNotification;
  [ZRPCode.PlayerLeft]: PlayerLeftNotification;
  [ZRPCode.SpectatorLeft]: SpectatorLeftNotification;
  [ZRPCode.CreateChatMessage]: ChatMessageEvent;
  [ZRPCode.BroadcastChatMessage]: ChatMessageNotification;
  [ZRPCode.Leave]: LeaveEvent;
  // all players
  [ZRPCode.GetLobby]: GetLobbyEvent;
  [ZRPCode.SendLobby]: SendLobbyNotification;
  // Roles
  [ZRPCode.SpectatorToPlayer]: SpectatorToPlayerEvent;
  [ZRPCode.PlayerToSpectator]: PlayerToSpectatorEvent;
  [ZRPCode.PlayerToHost]: PlayerToHostEvent;
  [ZRPCode.PromotedToHost]: YouAreHostNotification;
  [ZRPCode.HostChanged]: NewHostNotification;
  [ZRPCode.KickPlayer]: KickPlayerEvent;
  [ZRPCode.PlayerChangedRole]: PlayerChangedRoleNotification;
  [ZRPCode.PlayerDisconnected]: PlayerDisconnectedNotification;
  [ZRPCode.PlayerReconnected]: PlayerReconnectedNotification;
  // Keep alive
  [ZRPCode.KeepAlive]: KeepAliveEvent;
  [ZRPCode.AckKeepAlive]: AckKeepAliveNotification;
  // Lobby
  [ZRPCode.UpdateSetting]: UpdateSettingEvent;
  [ZRPCode.SettingChanged]: SettingChangedNotification;
  [ZRPCode.GetAllSettings]: GetSettingsEvent;
  [ZRPCode.SendAllSettings]: AllSettingsNotification;
  [ZRPCode.StartGame]: StartGameEvent;
  // Bots
  [ZRPCode.CreateBot]: CreateBotEvent;
  [ZRPCode.BotJoined]: BotJoinedNotification;
  [ZRPCode.BotLeft]: BotLeftNotification;
  [ZRPCode.UpdateBot]: UpdateBotEvent;
  [ZRPCode.DeleteBot]: DeleteBotEvent;
  [ZRPCode.GetBots]: GetBotsEvent;
  [ZRPCode.SendBots]: SendBotsNotification;
  // Game
  [ZRPCode.GameStarted]: GameStartedNotification;
  [ZRPCode.StartTurn]: StartTurnNotification;
  [ZRPCode.EndTurn]: EndTurnNotification;
  [ZRPCode.RequestEndTurn]: RequestEndTurnEvent;
  [ZRPCode.PlaceCard]: PlaceCardEvent;
  [ZRPCode.DrawCard]: DrawCardEvent;
  [ZRPCode.SendCards]: SendCardsNotification;
  [ZRPCode.RemoveCards]: RemoveCardNotification;
  [ZRPCode.StateUpdated]: StateUpdateNotification;
  [ZRPCode.GetDeck]: GetDeckEvent;
  [ZRPCode.SendDeck]: SendDeckNotification;
  [ZRPCode.GetPlayerState]: GetPlayerStateEvent;
  [ZRPCode.SendPlayerState]: SendPlayerStateNotification;
  [ZRPCode.GetPileTop]: GetPileTopEvent;
  [ZRPCode.SendPileTop]: SendPileTopNotification;
  [ZRPCode.GetPlayerDecision]: GetPlayerDecisionNotification;
  [ZRPCode.SendPlayerDecision]: PlayerDecisionEvent;
  [ZRPCode.PlayerWon]: PlayerWonNotification;
  // Errors
  [ZRPCode.GeneralError]: Error;
  [ZRPCode.MessageTooLongError]: MessageTooLongError;
  [ZRPCode.AccessDeniedError]: AccessDeniedError;
  [ZRPCode.LobbyFullError]: LobbyFullError;
  [ZRPCode.BotNameExistsError]: BotNameExistsError;
  [ZRPCode.EmptyPileError]: EmptyPileError;
  [ZRPCode.PlaceCardError]: PlaceCardError;
};
