# مِعمار · Architect

استوديو ذكي يساعدك على بناء خطة كاملة لموقعك أو تطبيقك أو نظامك الرقمي **قبل** التنفيذ:
الفكرة، الميزات، الشاشات، التقنيات، قاعدة البيانات، الأمان، MVP، الجدول الزمني، الميزانية، وتقرير قابل للتصدير (PDF / HTML / طباعة).
يدعم العربية والإنجليزية (RTL/LTR)، وضع داكن/فاتح، تصميم متجاوب Mobile-first، ومساعد ذكاء اصطناعي حقيقي مدعوم بـ Claude.

> A studio that helps you plan a full website / app / digital system **before** building it — with a real Claude-powered AI assistant. Arabic + English, dark/light, mobile-first.

---

## 1) التشغيل محلياً · Run locally

تحتاج **Node.js 18+** ([nodejs.org](https://nodejs.org)).

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر (عادةً http://localhost:5173).

> الواجهة كاملة تشتغل مباشرة. مساعد الذكاء الاصطناعي يحتاج خطوة إضافية (القسم 3).

---

## 2) الرفع على GitHub · Push to GitHub

أنشئ مستودعاً جديداً **فارغاً** على GitHub (بدون README)، ثم نفّذ داخل مجلد المشروع:

```bash
git init
git add .
git commit -m "first commit: مِعمار / Architect"
git branch -M main
git remote add origin https://github.com/USERNAME/architect.git
git push -u origin main
```

استبدل `USERNAME` باسم حسابك. إذا طُلب منك تسجيل دخول، استخدم **Personal Access Token** بدل كلمة المرور
(GitHub → Settings → Developer settings → Personal access tokens).

> ملاحظة أمان: ملف `.env` مُستثنى في `.gitignore` — لا ترفع مفتاح الـ API أبداً.

---

## 3) تشغيل الذكاء الاصطناعي الحقيقي · Enable real AI

لحماية المفتاح، النداء يمرّ عبر دالة خادم (`api/chat.js`) وليس من المتصفح مباشرة.
أسهل طريقة هي النشر على **Vercel** (مجاني):

1. ادخل [vercel.com](https://vercel.com) → **Add New → Project** → اختر مستودعك من GitHub.
2. في إعدادات المشروع → **Environment Variables** أضِف:
   - `ANTHROPIC_API_KEY` = مفتاحك من [console.anthropic.com](https://console.anthropic.com)
3. اضغط **Deploy**. بعد دقائق يصير عندك رابط حقيقي يعمل عليه المساعد.

> محلياً، إذا أردت تجربة المساعد بدون نشر، استخدم `vercel dev` بعد تثبيت Vercel CLI، أو اضبط `VITE_AI_ENDPOINT` على خادمك الخاص.
> بدون مفتاح، باقي الموقع يعمل بالكامل، والمساعد فقط يعرض رسالة لطيفة بأنه غير متصل.

---

## البنية · Structure

```
architect/
├─ api/chat.js        # دالة خادم آمنة تنادي Claude
├─ src/
│  ├─ App.jsx         # التطبيق بالكامل
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
├─ .env.example
└─ .gitignore
```

## التقنيات · Tech
React 18 · Vite · lucide-react · Anthropic Claude API

## الترخيص · License
MIT
