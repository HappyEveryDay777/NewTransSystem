"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QaIssue = exports.QAIssueStatus = exports.QAIssueSeverity = exports.QAIssueType = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/entities/base.entity");
const segment_entity_1 = require("../../files/entities/segment.entity");
var QAIssueType;
(function (QAIssueType) {
    QAIssueType["TERMINOLOGY"] = "terminology";
    QAIssueType["NUMBER"] = "number";
    QAIssueType["TAG"] = "tag";
    QAIssueType["UNTRANSLATED"] = "untranslated";
    QAIssueType["PUNCTUATION"] = "punctuation";
    QAIssueType["SPELLING"] = "spelling";
    QAIssueType["TM_CONSISTENCY"] = "tm_consistency";
    QAIssueType["MANUAL"] = "manual";
})(QAIssueType || (exports.QAIssueType = QAIssueType = {}));
var QAIssueSeverity;
(function (QAIssueSeverity) {
    QAIssueSeverity["MINOR"] = "minor";
    QAIssueSeverity["MAJOR"] = "major";
    QAIssueSeverity["CRITICAL"] = "critical";
})(QAIssueSeverity || (exports.QAIssueSeverity = QAIssueSeverity = {}));
var QAIssueStatus;
(function (QAIssueStatus) {
    QAIssueStatus["OPEN"] = "open";
    QAIssueStatus["REPLIED"] = "replied";
    QAIssueStatus["RESOLVED"] = "resolved";
    QAIssueStatus["REJECTED"] = "rejected";
})(QAIssueStatus || (exports.QAIssueStatus = QAIssueStatus = {}));
let QaIssue = class QaIssue extends base_entity_1.BaseEntity {
    segmentId;
    segment;
    type;
    severity;
    status;
    description;
    reportedBy;
    resolvedBy;
    resolution;
};
exports.QaIssue = QaIssue;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QaIssue.prototype, "segmentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => segment_entity_1.Segment),
    (0, typeorm_1.JoinColumn)({ name: 'segmentId' }),
    __metadata("design:type", segment_entity_1.Segment)
], QaIssue.prototype, "segment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: QAIssueType }),
    __metadata("design:type", String)
], QaIssue.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: QAIssueSeverity, default: QAIssueSeverity.MINOR }),
    __metadata("design:type", String)
], QaIssue.prototype, "severity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: QAIssueStatus, default: QAIssueStatus.OPEN }),
    __metadata("design:type", String)
], QaIssue.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], QaIssue.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QaIssue.prototype, "reportedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QaIssue.prototype, "resolvedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], QaIssue.prototype, "resolution", void 0);
exports.QaIssue = QaIssue = __decorate([
    (0, typeorm_1.Entity)('qa_issues')
], QaIssue);
//# sourceMappingURL=qa-issue.entity.js.map