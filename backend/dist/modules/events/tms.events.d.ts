export declare enum TmsEventType {
    PROJECT_CREATED = "project.created",
    PROJECT_STATUS_CHANGED = "project.status.changed",
    TASK_ASSIGNED = "task.assigned",
    TASK_COMPLETED = "task.completed",
    FILE_UPLOADED = "file.uploaded",
    QA_ISSUE_CREATED = "qa.issue.created"
}
export declare class ProjectCreatedEvent {
    readonly projectId: string;
    readonly name: string;
    readonly pmId?: string | undefined;
    constructor(projectId: string, name: string, pmId?: string | undefined);
}
export declare class TaskAssignedEvent {
    readonly taskId: string;
    readonly assigneeId: string;
    readonly projectId: string;
    constructor(taskId: string, assigneeId: string, projectId: string);
}
export declare class FileUploadedEvent {
    readonly fileId: string;
    readonly projectId: string;
    readonly originalName: string;
    constructor(fileId: string, projectId: string, originalName: string);
}
