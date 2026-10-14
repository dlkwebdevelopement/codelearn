$dirs = @(
  "public/images",
  "src/assets/fonts", "src/assets/icons", "src/assets/images", "src/assets/illustrations", "src/assets/logos", "src/assets/lottie", "src/assets/videos",
  "src/components/common", "src/components/ui", "src/components/buttons", "src/components/cards", "src/components/forms", "src/components/inputs", "src/components/modals", "src/components/navbar", "src/components/sidebar", "src/components/footer", "src/components/loader", "src/components/tables", "src/components/charts", "src/components/breadcrumbs", "src/components/pagination", "src/components/editor", "src/components/playground", "src/components/quiz", "src/components/course", "src/components/tutorial", "src/components/profile", "src/components/dashboard", "src/components/ai", "src/components/notifications",
  "src/layouts",
  "src/pages/Home", "src/pages/About", "src/pages/Contact", "src/pages/Blog", "src/pages/FAQ", "src/pages/Pricing", "src/pages/Login", "src/pages/Register", "src/pages/ForgotPassword", "src/pages/ResetPassword", "src/pages/Dashboard", "src/pages/Profile", "src/pages/Settings", "src/pages/Tutorials", "src/pages/Courses", "src/pages/Playground", "src/pages/Quiz", "src/pages/Projects", "src/pages/Certificates", "src/pages/Community", "src/pages/Search", "src/pages/AI", "src/pages/Notifications", "src/pages/NotFound", "src/pages/Unauthorized",
  "src/admin/Dashboard", "src/admin/Users", "src/admin/Courses", "src/admin/Tutorials", "src/admin/Categories", "src/admin/Lessons", "src/admin/Quiz", "src/admin/Projects", "src/admin/Certificates", "src/admin/Payments", "src/admin/Reports", "src/admin/Analytics", "src/admin/Blog", "src/admin/CMS", "src/admin/Settings",
  "src/routes",
  "src/services",
  "src/hooks",
  "src/context",
  "src/store",
  "src/constants",
  "src/utils",
  "src/helpers",
  "src/config",
  "src/styles",
  "src/data"
)

foreach ($dir in $dirs) {
  if (!(Test-Path -Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }
}

$files = @(
  "public/favicon.ico",
  "public/robots.txt",
  "public/logo.png",
  "public/manifest.json",
  "src/layouts/MainLayout.jsx",
  "src/layouts/DashboardLayout.jsx",
  "src/layouts/AuthLayout.jsx",
  "src/layouts/AdminLayout.jsx",
  "src/pages/Home/Hero.jsx",
  "src/pages/Home/Features.jsx",
  "src/pages/Home/PopularCourses.jsx",
  "src/pages/Home/Tutorials.jsx",
  "src/pages/Home/Testimonials.jsx",
  "src/pages/Home/Pricing.jsx",
  "src/pages/Tutorials/Html.jsx",
  "src/pages/Tutorials/Css.jsx",
  "src/pages/Tutorials/JavaScript.jsx",
  "src/pages/Tutorials/React.jsx",
  "src/pages/Tutorials/Node.jsx",
  "src/pages/Tutorials/Python.jsx",
  "src/pages/Tutorials/TutorialDetails.jsx",
  "src/routes/AppRoutes.jsx",
  "src/routes/PrivateRoute.jsx",
  "src/routes/AdminRoute.jsx",
  "src/routes/AuthRoute.jsx",
  "src/services/api.js",
  "src/services/auth.service.js",
  "src/services/tutorial.service.js",
  "src/services/course.service.js",
  "src/services/user.service.js",
  "src/services/payment.service.js",
  "src/styles/globals.css",
  "src/styles/variables.css",
  "src/styles/typography.css",
  "src/styles/animations.css",
  ".env"
)

foreach ($file in $files) {
  if (!(Test-Path -Path $file)) {
    if ($file -match "\.jsx$") {
      # Basic react component scaffold
      $name = [System.IO.Path]::GetFileNameWithoutExtension($file)
      $content = "import React from 'react';`n`nconst $name = () => {`n  return (`n    <div>$name Component</div>`n  );`n};`n`nexport default $name;"
      Set-Content -Path $file -Value $content
    } elseif ($file -match "\.js$") {
      Set-Content -Path $file -Value "// $file"
    } elseif ($file -match "\.css$") {
      Set-Content -Path $file -Value "/* $file */"
    } else {
      New-Item -ItemType File -Path $file -Force | Out-Null
    }
  }
}

Write-Host "Scaffolding Complete!"
