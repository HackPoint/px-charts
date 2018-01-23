export interface AuditItemModel {
  originator: string;
  actor: string;
  actorDisplayName: string;
  resource: string;
  resourceUuid: string;
  actionType: string;
  source: string;
  id: string;
  description: string;
}
