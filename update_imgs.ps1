$files = Get-ChildItem -Path "d:\project\QuickUtilitiesSuite-org\QuickUtilitiesSuiteCode\MSIX\site\docs" -Filter "quick-brightnesssync.md" -Recurse

foreach ($f in $files) {
    if (-not (Test-Path $f.FullName)) { continue }
    $content = Get-Content $f.FullName -Raw
    
    $newContent = [regex]::Replace($content, "/images/quick-logo/QuickBrightnessSync\.svg", "/images/quick-logo/Quick%20BrightnessSync.svg")
    $newContent = [regex]::Replace($newContent, "/images/snapshoot/Quick BrightnessSync\.png", "/images/snapshoot/Quick%20BrightnessSync.png")
    
    if ($content -ne $newContent) {
        Set-Content -Path $f.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($f.FullName)"
    }
}
