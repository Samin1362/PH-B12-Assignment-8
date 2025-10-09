# 🚀 HERO.IO — App Installation & Management Dashboard

A modern web application built with **React** that allows users to explore, install, and manage trending apps.  
It includes features like **localStorage persistence**, **sorting**, **toast notifications**, and a clean, responsive UI powered by **Tailwind CSS** and **DaisyUI**.

---

## 🌟 Features

- 🧩 **Install & Uninstall Apps** — Add or remove apps with one click, stored locally.
- 💾 **Local Storage Support** — Installed apps persist even after refreshing.
- 🔄 **Dynamic Sorting** — Sort installed apps by size (Low → High or High → Low).
- 🎨 **Responsive UI** — Works seamlessly across desktop and mobile.
- 🔔 **React Toast Notifications** — User-friendly alerts for install/uninstall actions.
- ⏳ **Suspense with Loading Spinner** — Displays a loader while routes are being fetched.
- 🧭 **Active Navbar Links** — Highlights the current page for better navigation.
- 🧱 **Modular Component Structure** — Clean separation of logic and UI for scalability.

---

## 🛠️ Tech Stack

| Category | Tools |
|-----------|--------|
| Frontend | React, React Router, React Icons |
| Styling | Tailwind CSS, DaisyUI |
| State & Storage | React Hooks, LocalStorage |
| Notifications | React Toastify |
| Loader | React Loader Spinner |
| Build Tool | Vite |

---

## 📂 Folder Structure

```

src/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── InstalledApp/
│
├── pages/
│   ├── Apps/
│   ├── Installation/
│   ├── Home/
│
├── utilities/
│   └── storeToDB.js
│
├── assets/
│   └── images/
│
└── main.jsx

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Hero-IO.git
cd Hero-IO
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Your app will start on **[http://localhost:5173/](http://localhost:5173/)** (default Vite port).

---

## 🧠 How It Works

1. When you click **Install**, the app’s `id` is stored in `localStorage` using the `storeItem()` function.
2. The **Installation** page dynamically reads this list and displays all installed apps.
3. When you click **Uninstall**, the `id` is removed using `removeItem()`, and the UI updates instantly.
4. **Toast notifications** appear on each action for a better experience.

---

## 💬 Toast Notifications

```js
toast.success("App installed successfully");
toast.error("App uninstalled successfully");
toast.info("App already installed");
```

---

## ⚡ Suspense Loader

The app uses **React Suspense** to display a loading spinner while route components are being loaded.

```jsx
<Suspense
  fallback={
    <div className="flex justify-center">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="green"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  }
>
  <Outlet />
</Suspense>
```

---

## 📦 Build for Production

```bash
npm run build
```

Then deploy the `/dist` folder to your preferred hosting platform (e.g., **Vercel**, **Netlify**, or **GitHub Pages**).

---

## 🧭 Navbar Active Links

Active routes are highlighted using **NavLink** from React Router:

```jsx
<NavLink
  to="/apps"
  className={({ isActive }) =>
    isActive
      ? "text-[#632EE3] font-bold"
      : "text-gray-600 hover:text-[#632EE3]"
  }
>
  Apps
</NavLink>
```

---


## 🤝 Contributing

Contributions are always welcome!
Follow these steps:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/YourFeature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** to your branch (`git push origin feature/YourFeature`)
5. **Open** a Pull Request

---

## 🧑‍💻 Author

**Samin Israk**
[🐙 GitHub](https://github.com/Samin1362)

---
