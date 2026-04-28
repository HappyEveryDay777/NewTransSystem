export enum TmsEventType {
  PROJECT_CREATED = 'project.created',
  PROJECT_STATUS_CHANGED = 'project.status.changed',
  TASK_ASSIGNED = 'task.assigned',
  TASK_COMPLETED = 'task.completed',
  FILE_UPLOADED = 'file.uploaded',
  QA_ISSUE_CREATED = 'qa.issue.created',
}

export class ProjectCreatedEvent {
  constructor(
    public readonly projectId: string,
    public readonly name: string,
    public readonly pmId?: string,
  ) {}
}

export class TaskAssignedEvent {
  constructor(
    public readonly taskId: string,
    public readonly assigneeId: string,
    public readonly projectId: string,
  ) {}
}

export class FileUploadedEvent {
  constructor(
    public readonly fileId: string,
    public readonly projectId: string,
    public readonly originalName: string,
  ) {}
}
