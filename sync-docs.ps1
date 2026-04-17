# Quick Utilities Suite - 多语言文档生成脚本
# 将英文源文档复制到所有 11 个语言目录中

param(
    [string]$SourceDir = "d:\project\QuickUtilitiesSuite-org\QuickUtilitiesSuiteCode\MSIX\site\docs",
    [string]$verbose = $true
)

$languages = @("ar", "de", "es", "fr", "it", "ja", "ko", "pt-br", "ru", "zh-cn", "zh-tw")
$subDirs = @("privacy", "products")
$rootFiles = @("index.md", "commercial.md", "pricing.md", "use-cases.md")

Write-Host "Quick Utilities Suite - 多语言同步脚本"
Write-Host "========================================" -ForegroundColor Green
Write-Host "源目录: $SourceDir"
Write-Host "目标语言: $($languages.Count) 个"
Write-Host ""

# 第一步：检查源文件
Write-Host "第 1 步：验证源文件..." -ForegroundColor Cyan
$sourceFiles = Get-ChildItem "$SourceDir\docs" -Recurse -Filter "*.md" | Where-Object{$_.FullName -notmatch "\.vitepress"} | Measure-Object
Write-Host "✓ 找到 $($sourceFiles.Count) 个 markdown 文件"
Write-Host ""

# 第二步：对每个语言目录同步文件
Write-Host "第 2 步：同步所有语言文档..." -ForegroundColor Cyan
foreach ($lang in $languages) {
    if ($lang -eq "zh-cn") {
        Write-Host "⊘ $lang - 已有完整翻译，跳过" -ForegroundColor Yellow
        continue
    }
    
    Write-Host "→ 处理 $lang..."
    
    # 确保目录结构存在
    foreach ($subDir in $subDirs) {
        $targetSubDir = "$SourceDir\$lang\$subDir"
        if (-not (Test-Path $targetSubDir)) {
            New-Item -Path $targetSubDir -Type Directory -Force | Out-Null
        }
    }
    
    # 复制根目录文件
    foreach ($file in $rootFiles) {
        $sourceFile = "$SourceDir\$file"
        $targetFile = "$SourceDir\$lang\$file"
        if (Test-Path $sourceFile) {
            Copy-Item -Path $sourceFile -Destination $targetFile -Force
            Write-Host "  ✓ 复制 $file"
        }
    }
    
    # 复制 privacy 目录
    $sourcePrivacy = "$SourceDir\privacy"
    $targetPrivacy = "$SourceDir\$lang\privacy"
    if (Test-Path $sourcePrivacy) {
        Get-ChildItem $sourcePrivacy -Filter "*.md" | ForEach-Object {
            Copy-Item -Path $_.FullName -Destination "$targetPrivacy\$($_.Name)" -Force
        }
        Write-Host "  ✓ 复制 privacy 目录"
    }
    
    # 复制 products 目录
    $sourceProducts = "$SourceDir\products"
    $targetProducts = "$SourceDir\$lang\products"
    if (Test-Path $sourceProducts) {
        Get-ChildItem $sourceProducts -Filter "*.md" | ForEach-Object {
            Copy-Item -Path $_.FullName -Destination "$targetProducts\$($_.Name)" -Force
        }
        Write-Host "  ✓ 复制 products 目录"
    }
}

Write-Host ""
Write-Host "✓ 同步完成！" -ForegroundColor Green
Write-Host ""
Write-Host "后续步骤："
Write-Host "1. 手动或使用 AI 翻译 API 翻译每个语言目录中的内容"
Write-Host "2. 验证所有链接中的路由前缀正确（如 /ar/, /de/ 等）"
Write-Host "3. 运行 npm run docs:build 验证构建成功"
Write-Host ""
