"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadedEvent = exports.TaskAssignedEvent = exports.ProjectCreatedEvent = exports.TmsEventType = void 0;
var TmsEventType;
(function (TmsEventType) {
    TmsEventType["PROJECT_CREATED"] = "project.created";
    TmsEventType["PROJECT_STATUS_CHANGED"] = "project.status.changed";
    TmsEventType["TASK_ASSIGNED"] = "task.assigned";
    TmsEventType["TASK_COMPLETED"] = "task.completed";
    TmsEventType["FILE_UPLOADED"] = "file.uploaded";
    TmsEventType["QA_ISSUE_CREATED"] = "qa.issue.created";
})(TmsEventType || (exports.TmsEventType = TmsEventType = {}));
class ProjectCreatedEvent {
    projectId;
    name;
    pmId;
    constructor(projectId, name, pmId) {
        this.projectId = projectId;
        this.name = name;
        this.pmId = pmId;
    }
}
exports.ProjectCreatedEvent = ProjectCreatedEvent;
class TaskAssignedEvent {
    taskId;
    assigneeId;
    projectId;
    constructor(taskId, assigneeId, projectId) {
        this.taskId = taskId;
        this.assigneeId = assigneeId;
        this.projectId = projectId;
    }
}
exports.TaskAssignedEvent = TaskAssignedEvent;
class FileUploadedEvent {
    fileId;
    projectId;
    originalName;
    constructor(fileId, projectId, originalName) {
        this.fileId = fileId;
        this.projectId = projectId;
        this.originalName = originalName;
    }
}
exports.FileUploadedEvent = FileUploadedEvent;
//# sourceMappingURL=tms.events.js.map