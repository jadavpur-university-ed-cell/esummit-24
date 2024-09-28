-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "role" TEXT,
    "phone" TEXT,
    "email_verified" TIMESTAMP(3),
    "isVerified" BOOLEAN NOT NULL,
    "rollNo" TEXT,
    "image" TEXT,
    "gender" TEXT,
    "foodPreference" TEXT,
    "shirtSize" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "teams" (
    "teamId" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "member1Id" TEXT NOT NULL,
    "member2Id" TEXT,
    "member3Id" TEXT,
    "member4Id" TEXT,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("teamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "verificationtokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "teams_teamId_key" ON "teams"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "teams_eventName_teamName_key" ON "teams"("eventName", "teamName");

-- CreateIndex
CREATE UNIQUE INDEX "teams_eventName_member1Id_key" ON "teams"("eventName", "member1Id");

-- CreateIndex
CREATE UNIQUE INDEX "teams_eventName_member2Id_key" ON "teams"("eventName", "member2Id");

-- CreateIndex
CREATE UNIQUE INDEX "teams_eventName_member3Id_key" ON "teams"("eventName", "member3Id");

-- CreateIndex
CREATE UNIQUE INDEX "teams_eventName_member4Id_key" ON "teams"("eventName", "member4Id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_member1Id_fkey" FOREIGN KEY ("member1Id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_member2Id_fkey" FOREIGN KEY ("member2Id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_member3Id_fkey" FOREIGN KEY ("member3Id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_member4Id_fkey" FOREIGN KEY ("member4Id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
