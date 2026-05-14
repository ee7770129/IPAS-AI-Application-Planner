@echo off
REM Launch IPAS AI Flashcards (Vite dev server on port 5211)

REM Kill existing process on port 5211
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5211 " ^| findstr "LISTENING"') do (
    taskkill /F /PID %%a >nul 2>&1
)

cd /d "%~dp0flashcards"
start "" "http://localhost:5211"
npm run dev
