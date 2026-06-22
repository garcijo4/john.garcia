@echo off
setlocal
cd /d "%~dp0"

echo ============================================================
echo   Deploy portfolio site to GitHub (origin / gh-pages)
echo ============================================================
echo.

REM --- 1. Fix CV filename so it matches the link in index.html ---
if exist "assets\John_Garcia _CV.pdf" (
    echo Fixing CV filename ^(removing stray space^)...
    if exist "assets\John_Garcia_CV.pdf" del /q "assets\John_Garcia_CV.pdf"
    ren "assets\John_Garcia _CV.pdf" "John_Garcia_CV.pdf"
)

REM --- 2. Keep local-only files out of the public repo ---
if not exist ".gitignore" (type nul > ".gitignore")
findstr /x /c:".agent/" ".gitignore" >nul 2>&1 || echo .agent/>> ".gitignore"
findstr /x /c:"preview-site.bat" ".gitignore" >nul 2>&1 || echo preview-site.bat>> ".gitignore"
findstr /x /c:"deploy-to-github.bat" ".gitignore" >nul 2>&1 || echo deploy-to-github.bat>> ".gitignore"

REM --- 3. Stage site files + assets only ---
git add index.html styles.css app.js assets .gitignore

echo.
echo The following changes are staged:
git status --short
echo.

REM --- 4. Commit ---
git commit -m "Add conference presentations, professional development, and recent updates; add dark mode, print styles, and SEO/accessibility improvements; link California Lutheran University and fix CV filename"

REM --- 5. Push to GitHub ---
echo.
echo Pushing to GitHub (origin gh-pages)...
git push origin gh-pages

echo.
echo ============================================================
echo   Done. If a sign-in prompt appeared, complete it to finish.
echo   Your live site updates at the GitHub Pages URL shortly.
echo ============================================================
pause
