// Lecture model types and enums

export enum LectureType {
  LESSON = 0,      // درس
  TAZKIYAH = 1,    // تزكية
  SPECIAL_MEETING = 2, // لقاء خاص
  REVIVAL = 3      // إحياء
}

export enum RecurrenceType {
  DAILY = 0,       // يومي
  WEEKLY = 1,      // اسبوعي
  MONTHLY = 2      // شهري
}

export enum DayOfWeek {
  FRIDAY = 0,      // جمعة
  SATURDAY = 1,    // السبت
  SUNDAY = 2,      // الأحد
  MONDAY = 3,      // الاثنين
  TUESDAY = 4,     // الثلاثاء
  WEDNESDAY = 5,   // الأربعاء
  THURSDAY = 6     // الخميس
}

export interface Lecture {
  id?: number;
  created_at?: string;
  title: string;
  description?: string;
  type: LectureType;
  recurrence: RecurrenceType;
  day_of_week: DayOfWeek;
  mosque_name: string;
  city: string;
  location_url: string;
  time_start: string; // Format: HH:MM
  time_end: string;   // Format: HH:MM
  image_link: string;
  image_path: string;
}

export interface LectureFormData {
  title: string;
  description: string;
  type: LectureType;
  recurrence: RecurrenceType;
  day_of_week: DayOfWeek;
  mosque_name: string;
  city: string;
  location_url: string;
  time_start: string;
  time_end: string;
  image?: File;
}

// Display labels for enums
export const lectureTypeLabels = {
  [LectureType.LESSON]: "درس",
  [LectureType.TAZKIYAH]: "تزكية",
  [LectureType.SPECIAL_MEETING]: "لقاء خاص",
  [LectureType.REVIVAL]: "إحياء"
};

export const recurrenceTypeLabels = {
  [RecurrenceType.DAILY]: "يومي",
  [RecurrenceType.WEEKLY]: "اسبوعي",
  [RecurrenceType.MONTHLY]: "شهري"
};

export const dayOfWeekLabels = {
  [DayOfWeek.FRIDAY]: "الجمعة",
  [DayOfWeek.SATURDAY]: "السبت",
  [DayOfWeek.SUNDAY]: "الأحد",
  [DayOfWeek.MONDAY]: "الاثنين",
  [DayOfWeek.TUESDAY]: "الثلاثاء",
  [DayOfWeek.WEDNESDAY]: "الأربعاء",
  [DayOfWeek.THURSDAY]: "الخميس"
};

// Helper functions
export const getLectureTypeOptions = () => {
  return Object.entries(lectureTypeLabels).map(([value, label]) => ({
    value: parseInt(value),
    label
  }));
};

export const getRecurrenceTypeOptions = () => {
  return Object.entries(recurrenceTypeLabels).map(([value, label]) => ({
    value: parseInt(value),
    label
  }));
};

export const getDayOfWeekOptions = () => {
  return Object.entries(dayOfWeekLabels).map(([value, label]) => ({
    value: parseInt(value),
    label
  }));
};
