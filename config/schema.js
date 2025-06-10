import { boolean, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    subscriptionId: varchar()
});


export const coursesTable = pgTable("courses", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cid: varchar().notNull().unique(),
    name: varchar(),
    description: varchar(),
    noOfChapters: integer().notNull(),
    includeVideo: boolean().default(false),
    level: varchar().notNull(),
    catetgory: varchar(),
    courseJson: json(),
    bannerImageUrl: varchar().default(''),
    courseContent: json().default({}),
    userEmail: varchar('userEmail').references(() => usersTable.email).notNull()
})

export const enrollCourseTable = pgTable('enrollCourse', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cid: varchar('cid').references(() => coursesTable.cid),
    userEmail: varchar('userEmail').references(() => usersTable.email).notNull(),
    completedChapters: json()
})
