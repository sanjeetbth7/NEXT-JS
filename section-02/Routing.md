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
* you can see app/services 

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
Great! Based on the style you've used, here's a matching continuation explaining **📂 Dynamic Routing** and **📂 Nested Dynamic Routing** in the same structured format:

---

## 📂 Dynamic Routing

* In Next.js, **dynamic routing** allows you to create pages where part of the route is **variable** (like `/blog/[slug]` or `/user/[id]`).
* To create a dynamic route, use **square brackets** (`[param]`) inside the `app` directory.

#### 📁 Example:

```
app/
├── blog/
│   └── [blogID]/
│       └── page.jsx     // Renders dynamic route like /blog/my-first-post
```

### ✅ Usage inside `page.jsx`:

```jsx
import Link from 'next/link';

export default async function Page({ params }) {
  const { blogID } = await params;
  return (
    <div> <h1>Page: {blogID}</h1> </div>
  );
}
```

### 🌐 Route Example:

```
/blog/my-first-post → renders: Blog Slug: my-first-post
```

> **Note:** Dynamic segments are case-sensitive. `/blog/Post1` and `/blog/post1` are treated as different routes.

---

## 📂 Nested Dynamic Routing

* You can also **nest dynamic routes**, allowing deeper levels like `/blog/[blogID]/comments/[commentID]`.
* Each dynamic segment gets its own folder with the `[param]` naming.

#### 📁 Example:

```
app/
├── blog/
│   └── [blogID]/
│       └── comments/
│           └── [commentID]/
│               └── page.jsx    // Renders /blogs/123/comments/22
```

### ✅ Usage inside `page.jsx`:

```jsx
export default async function ({ params }) {
  const { blogID, commentID } = await params;
  return (
    <div> Comment no.{" "} <b> <i>{commentID}</i>  </b>{" "}  of blog <b>{blogID}.</b>
    </div>
  );
}
```

### 🌐 Route Example:

```
http://localhost:3000/blogs/123/comments/22 → renders: blogID: 123 | commentID: 22
```

> ✅ Tip: Always use descriptive dynamic names like `[userId]` or `[slug]` for better readability.

---

