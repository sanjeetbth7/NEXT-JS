## 🚀 Routing in Next.js

### ✅ Automatic Routing

* Next.js supports **automatic routing** based on the **file system**.
* For each route, you create a **folder inside the `app` directory**, and inside that folder, a `page.jsx` or `page.tsx` file contains the code for that route.
* The function name doesn't need to match the folder name, but keeping them consistent improves readability.

#### 📁 Example:

* `/` → home route → code is in: `app/page.jsx`
* `/example` → example route → code is in: `app/example/page.jsx`
  
**Note :** the routing name "example" is case-sensetive, i.e. /home and /Home will be two different routes.
---

## 📂 Nested Routing

* You can nest folders inside the `app` directory to create **nested routes**.
* Each nested folder should have its own `page.jsx` file for the route.
* You can also use `layout.jsx` in a folder to **share layout between nested pages**.

#### 📁 Example:

```
app/
├── dashboard/
│   ├── page.jsx         // Renders /dashboard
│   └── analytics/
│       └── page.jsx     // Renders /dashboard/analytics
```

---

## 🔗 `<Link>` vs `<a>` Tag

| Tag      | Behavior                                                               |
| -------- | ---------------------------------------------------------------------- |
| `<a>`    | Navigates to the page but causes a **full page reload**.               |
| `<Link>` | Uses Next.js routing. It performs **client-side navigation** (faster). |

### ❌ Bad (causes full reload):

```html
<a href="/about">About Page</a>
```

### ✅ Good (Next.js way):

```jsx
import Link from 'next/link';

<Link href="/about">About Page</Link> 
```

> **Tip:** Always use `<Link>` for internal routing to preserve Next.js performance benefits.
> Here in herf, we need to give full route, e.g. if the path is /services/seo then in seo sevices file if linking with seo file then "./seo" will not work, we need to write full as '/services/seo'.
e.g. ``` <Link href="/services/seo">SEO</Link>```
---
## 📂 Dynamic Routing

---
## 📂 Nested Dynamic Routing