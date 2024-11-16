import { Card } from "./card";
import { UIFeedbackKind, UIFeedbackType } from "./feedback";
import { ZRPPlayerState } from "./playerState";
import { ZRPRole } from "./role";
import { GameSettingsType } from "./settings";

/**
 * ZRPCode: 100
 */
export class PlayerJoinedNotification {
  public constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly score: number,
    public readonly isBot: boolean
  ) {}
}

/**
 * ZRPCode: 101
 */
export class SpectatorJoinedNotification {
  public constructor(
    public readonly id: number,
    public readonly username: string
  ) {}
}

/**
 * ZRPCode: 102
 */
export class PlayerLeftNotification {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 103
 */
export class SpectatorLeftNotification {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 104
 */
export class ChatMessageEvent {
  public constructor(public readonly message: string) {}
}

/**
 * ZRPCode: 105
 */
export class ChatMessageNotification {
  public constructor(
    public readonly id: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 106
 */
export class LeaveEvent {
  public constructor() {}
}

/**
 * ZRPCode: 108
 * @link 109
 */
export class GetLobbyEvent {
  public constructor() {}
}

/**
 * @link SendLobbyNotification
 */
export class GetLobby_PlayerDTO {
  public constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly role: ZRPRole,
    public readonly state: ZRPPlayerState,
    public readonly score: number
  ) {}
}

/**
 * ZRPCode: 109
 */
export class SendLobbyNotification {
  public constructor(public readonly players: GetLobby_PlayerDTO[]) {}
}

/**
 * ZRPCode: 110
 */
export class SpectatorToPlayerEvent {
  public constructor() {}
}

/**
 * ZRPCode: 111
 */
export class PlayerToSpectatorEvent {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 112
 */
export class PlayerToHostEvent {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 113
 */
export class YouAreHostNotification {
  public constructor() {}
}

/**
 * ZRPCode: 114
 */
export class NewHostNotification {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 115
 */
export class KickPlayerEvent {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 116
 */
export class PlayerChangedRoleNotification {
  public constructor(
    public readonly id: number,
    public readonly role: ZRPRole,
    public readonly score: number
  ) {}
}

/**
 * ZRPCode: 117
 */
export class PlayerDisconnectedNotification {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 118
 */
export class PlayerReconnectedNotification {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 198
 */
export class KeepAliveEvent {
  public constructor() {}
}

/**
 * ZRPCode: 199
 */
export class AckKeepAliveNotification {
  public constructor() {}
}

/**
 * ZRPCode: 200
 */
export class UpdateSettingEvent {
  public constructor(
    public readonly setting: string,
    public readonly value: number
  ) {}
}

/**
 * ZRPCode: 201
 */
export class SettingChangedNotification {
  public constructor(
    public readonly setting: string,
    public readonly value: number
  ) {}
}

/**
 * ZRPCode: 202
 */
export class GetSettingsEvent {
  public constructor() {}
}

/**
 * @link AllSettingsNotification
 */
export class AllSettings_SettingDTO {
  public constructor(
    public readonly setting: string,
    public readonly value: number,
    public readonly title: Record<string, string>,
    public readonly description: Record<string, string>,
    public readonly type: GameSettingsType,
    public readonly isReadonly: boolean,
    public readonly min?: number,
    public readonly max?: number
  ) {}
}

/**
 * ZRPCode: 203
 */
export class AllSettingsNotification {
  public constructor(public readonly settings: AllSettings_SettingDTO) {}
}

/**
 * ZRPCode: 210
 */
export class StartGameEvent {
  public constructor() {}
}

/**
 * @link CreateBotEvent
 * @link UpdateBotEvent
 * @link AllBots_BotDTO
 */
export class BotConfigDTO {
  public constructor(public readonly type: number) {}
}

/**
 * ZRPCode: 230
 */
export class CreateBotEvent {
  public constructor(
    public readonly username: string,
    public readonly config: BotConfigDTO
  ) {}
}

/**
 * ZRPCode: 231
 */
export class BotJoinedNotification {
  public constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly wins: number
  ) {}
}

/**
 * ZRPCode: 232
 */
export class BotLeftNotification {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 233
 */
export class UpdateBotEvent {
  public constructor(
    public readonly id: number,
    public readonly config: BotConfigDTO
  ) {}
}

/**
 * ZRPCode: 235
 */
export class DeleteBotEvent {
  public constructor(public readonly id: number) {}
}

/**
 * ZRPCode: 236
 */
export class GetBotsEvent {
  public constructor() {}
}

/**
 * @link SendBotsNotification
 */
export class AllBots_BotDTO {
  public constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly config: BotConfigDTO,
    public readonly score: number
  ) {}
}

/**
 * ZRPCode: 237
 */
export class SendBotsNotification {
  public constructor(public readonly bots: AllBots_BotDTO[]) {}
}

/**
 * ZRPCode: 300
 */
export class GameStartedNotification {
  public constructor(
    public readonly hand: Card[],
    public readonly players: SendPlayerState_PlayerDTO[],
    public readonly pile: Card
  ) {}
}

/**
 * ZRPCode: 301
 */
export class StartTurnNotification {
  public constructor() {}
}

/**
 * ZRPCode: 302
 */
export class EndTurnNotification {
  public constructor() {}
}

/**
 * ZRPCode: 303
 */
export class RequestEndTurnEvent {
  public constructor() {}
}

/**
 * ZRPCode: 304
 */
export class PlaceCardEvent {
  public constructor(public readonly card: Card) {}
}

/**
 * ZRPCode: 305
 */
export class DrawCardEvent {
  public constructor() {}
}

/**
 * ZRPCode: 306
 */
export class SendCardsNotification {
  public constructor(public readonly cards: Card[]) {}
}

/**
 * ZRPCode: 307
 */
export class RemoveCardNotification {
  public constructor(public readonly cards: Card[]) {}
}

/**
 * @link StateUpdateNotification
 */
export class StateUpdate_FeedbackDTO {
  public constructor(
    public readonly type: UIFeedbackType,
    public readonly kind: UIFeedbackKind,
    public readonly args: Record<string, number>
  ) {}
}

/**
 * ZRPCode: 308
 */
export class StateUpdateNotification {
  public constructor(
    public readonly pileTop: Card,
    public readonly activePlayer: number,
    public readonly cardAmounts: Record<number, number>,
    public readonly feedback: StateUpdate_FeedbackDTO[],
    public readonly currentDrawAmount?: number
  ) {}
}

/**
 * ZRPCode: 310
 */
export class GetDeckEvent {
  public constructor() {}
}

/**
 * ZRPCode: 311
 */
export class SendDeckNotification {
  public constructor(public readonly hand: Card[]) {}
}

/**
 * ZRPCode: 312
 */
export class GetPlayerStateEvent {
  public constructor() {}
}

/**
 * @link SendPlayerStateNotification
 */
export class SendPlayerState_PlayerDTO {
  public constructor(
    public readonly id: number,
    public readonly username: string,
    public readonly cards: number,
    public readonly order: number,
    public readonly isActivePlayer: boolean
  ) {}
}

/**
 * ZRPCode: 313
 */
export class SendPlayerStateNotification {
  public constructor(public readonly players: SendPlayerState_PlayerDTO[]) {}
}

/**
 * ZRPCode: 314
 */
export class GetPileTopEvent {
  public constructor() {}
}

/**
 * ZRPCode: 315
 */
export class SendPileTopNotification {
  public constructor(public readonly card: Card) {}
}

/**
 * ZRPCode: 316
 */
export class GetPlayerDecisionNotification {
  public constructor(
    public readonly type: number,
    public readonly options: string[]
  ) {}
}

/**
 * ZRPCode: 317
 */
export class PlayerDecisionEvent {
  public constructor(
    public readonly type: number,
    public readonly decision: number
  ) {}
}

/**
 * @link PlayerWonNotification
 */
export class PlayerWon_PlayerSummaryDTO {
  public constructor(
    public readonly id: number,
    public readonly position: number,
    public readonly score: number
  ) {}
}

/**
 * ZRPCode: 399
 */
export class PlayerWonNotification {
  public constructor(
    public readonly id: number,
    public readonly summary: PlayerWon_PlayerSummaryDTO[]
  ) {}
}

/**
 * ZRPCode: 400
 */
export class Error {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 401
 */
export class MessageTooLongError {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 420
 */
export class AccessDeniedError {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 421
 */
export class LobbyFullError {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 425
 */
export class BotNameExistsError {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 426
 */
export class EmptyPileError {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}

/**
 * ZRPCode: 434
 */
export class PlaceCardError {
  public constructor(
    public readonly code: number,
    public readonly message: string
  ) {}
}
