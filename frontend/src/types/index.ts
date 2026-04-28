export enum Role {
  SUPER_ADMIN = 'super_admin', PM = 'pm', TRANSLATOR = 'translator',
  REVIEWER = 'reviewer', ENGINEER = 'engineer', CLIENT = 'client',
}
export enum ProjectStatus {
  DRAFT = 'draft', QUOTED = 'quoted', CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress', REVIEW = 'review', DELIVERED = 'delivered',
  COMPLETED = 'completed', CANCELLED = 'cancelled',
}
export enum TaskStatus {
  PENDING = 'pending', ASSIGNED = 'assigned', IN_PROGRESS = 'in_progress',
  SUBMITTED = 'submitted', REVIEWING = 'reviewing', REVISION = 'revision',
  APPROVED = 'approved', COMPLETED = 'completed',
}
export enum SegmentStatus {
  UNTRANSLATED = 'untranslated', DRAFT = 'draft', TRANSLATED = 'translated',
  REVIEWED = 'reviewed', APPROVED = 'approved',
}
export enum QAIssueType {
  TERMINOLOGY = 'terminology', NUMBER = 'number', TAG = 'tag',
  UNTRANSLATED = 'untranslated', PUNCTUATION = 'punctuation',
  SPELLING = 'spelling', TM_CONSISTENCY = 'tm_consistency', MANUAL = 'manual',
}
export enum QAIssueSeverity { MINOR = 'minor', MAJOR = 'major', CRITICAL = 'critical' }
export enum QAIssueStatus { OPEN = 'open', REPLIED = 'replied', RESOLVED = 'resolved', REJECTED = 'rejected' }

export interface User { id: string; email: string; name: string; role: Role; isActive: boolean; phone?: string; avatar?: string; createdAt: string }
export interface Client { id: string; name: string; companyName?: string; email: string; phone?: string; address?: string; country?: string; languagePairs?: {source:string;target:string}[]; priceList?: Record<string,number>; isActive: boolean; notes?: string; createdAt: string }
export interface Project { id: string; name: string; description?: string; sourceLanguage: string; targetLanguages: string[]; status: ProjectStatus; clientId?: string; client?: Client; pmId?: string; pm?: User; deadline?: string; quotedPrice?: number; domain?: string; wordCount?: {total:number;exactMatch:number;fuzzyMatch:number;noMatch:number}; createdAt: string }
export interface Task { id: string; name: string; projectId: string; project?: Project; assigneeId?: string; assignee?: User; status: TaskStatus; type: string; sourceLanguage: string; targetLanguage: string; deadline?: string; wordCount?: number; rate?: number; notes?: string; createdAt: string }
export interface FileEntity { id: string; originalName: string; storagePath: string; mimeType: string; size: number; projectId: string; currentVersion: number; sourceLanguage?: string; targetLanguage?: string; isParsed: boolean; segmentCount: number; createdAt: string }
export interface Segment { id: string; fileId: string; segmentNumber: number; sourceText: string; targetText?: string; status: SegmentStatus; tmMatchRate?: number; tmMatchSource?: string; mtSuggestion?: {text:string;provider:string;score:number}; createdAt: string }
export interface TmEntry { id: string; sourceText: string; targetText: string; sourceLanguage: string; targetLanguage: string; clientId?: string; domain?: string; usageCount: number; isVerified: boolean; createdAt: string }
export interface Term { id: string; sourceTerm: string; targetTerm: string; sourceLanguage: string; targetLanguage: string; clientId?: string; domain?: string; definition?: string; context?: string; isForbidden: boolean; notes?: string; isActive: boolean; createdAt: string }
export interface CorpusEntry { id: string; sourceText: string; targetText: string; sourceLanguage: string; targetLanguage: string; clientId?: string; projectId?: string; domain?: string; isAligned: boolean; alignmentScore?: number; createdAt: string }
export interface QaIssue { id: string; segmentId: string; type: QAIssueType; severity: QAIssueSeverity; status: QAIssueStatus; description: string; reportedBy?: string; resolvedBy?: string; resolution?: string; createdAt: string }
export interface Notification { id: string; userId: string; type: string; title: string; content?: string; data?: Record<string,any>; isRead: boolean; relatedEntityType?: string; relatedEntityId?: string; createdAt: string }
export interface Translator { id: string; userId: string; user?: User; sourceLanguages: string[]; targetLanguages: string[]; domains?: string[]; ratePerWord?: number; currency?: string; rating: number; totalProjectsCompleted: number; onTimeRate: number; currentWorkload: number; isAvailable: boolean; bio?: string; createdAt: string }
export interface Setting { id: string; key: string; value: any; description?: string; isPublic: boolean }
