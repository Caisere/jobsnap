/*
  Warnings:

  - Changed the type of `type` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('PART_TIME', 'FULL_TIME');

-- Step 1: Add a temporary column
ALTER TABLE "Job" ADD COLUMN "type_new" "JobType";

-- Step 2: Migrate existing data
-- Update based on what values you currently have in the type column
UPDATE "Job" 
SET "type_new" = CASE 
  WHEN LOWER("type") IN ('part_time', 'part-time', 'parttime', 'part time') THEN 'PART_TIME'::"JobType"
  WHEN LOWER("type") IN ('full_time', 'full-time', 'fulltime', 'full time') THEN 'FULL_TIME'::"JobType"
  ELSE 'FULL_TIME'::"JobType"  -- Default fallback
END;

-- Step 3: Make the new column NOT NULL
ALTER TABLE "Job" ALTER COLUMN "type_new" SET NOT NULL;

-- Step 4: Drop the old column
ALTER TABLE "Job" DROP COLUMN "type";

-- Step 5: Rename the new column to the original name
ALTER TABLE "Job" RENAME COLUMN "type_new" TO "type";