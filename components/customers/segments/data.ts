import type { SegmentItem } from "./types";

const defaultTimestamp = "22:10, 27/02/2026";

export const initialSegments: SegmentItem[] = [
  { id: "seg-1", name: "New Subscribers", customers: 0, createdAt: defaultTimestamp, updatedAt: defaultTimestamp },
  { id: "seg-2", name: "SMS Subscribers", customers: 0, createdAt: defaultTimestamp, updatedAt: defaultTimestamp },
  { id: "seg-3", name: "Email Subscribers", customers: 0, createdAt: defaultTimestamp, updatedAt: defaultTimestamp },
  { id: "seg-4", name: "Zalo Subscribers", customers: 0, createdAt: defaultTimestamp, updatedAt: defaultTimestamp },
  { id: "seg-5", name: "Facebook Subscribers", customers: 0, createdAt: defaultTimestamp, updatedAt: defaultTimestamp },
  { id: "seg-6", name: "Email Complaint Subscribers", customers: 0, createdAt: defaultTimestamp, updatedAt: defaultTimestamp },
];
