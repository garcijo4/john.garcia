@echo off
REM ============================================================
REM  Local preview server for the portfolio site
REM  Double-click this file to preview the site at
REM  http://localhost:8000  (press Ctrl+C in this window to stop)
REM ============================================================
cd /d "%~dp0"
echo.
echo  Starting local preview at http://localhost:8000
echo  Leave this window open while reviewing. Close it (or Ctrl+C) to stop.
echo.
start "" "http://localhost:8000/index.html"
py -m http.server 8000 2>nul
if errorlevel 1 python -m http.server 8000
