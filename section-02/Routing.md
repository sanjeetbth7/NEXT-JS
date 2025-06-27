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

#### Example:

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


## 📂 **Catch-all Routes**

**Syntax:**

```tsx
 /files/[...filePath].js
```

**Behavior:**

* Matches `/files/a`, `/files/a/b`, `/files/a/b/c`, etc.
* The `slug` (filePath) will be an array:

  * `/blog/a` → `slug = ['a']`
  * `/blog/a/b` → `slug = ['a', 'b']`

**Use Case:**

* Useful for deep dynamic routing where the number of URL segments is unknown.

### 📂 **Optional Catch-all Routes**

**Syntax:**

```tsx
 /files/[[...slug]].js
```

**Behavior:**

* Matches everything a catch-all route does **plus** the base path `/files`.
* The `slug` is:

  * `undefined` for `/blog`
  * `[]` for `/blog/`
  * `['a']` for `/blog/a`, etc.

```
import { use } from "react";
export default function Files({params}) {
    const {filePath} = use(params);
  return (
    <h1>file path <i>/{filePath?.join('/')}</i></h1>
  )
}
```
* if `localhost:3000/files/imi/343/this/is/st`  then output : file path /imi/343/this/is/st
* if `localhost:3000/files`  then output : file path /

**Use Case:**

* Ideal when both the base route and dynamic nested routes should resolve to the same page.
* Single entry point for a flexible file-based system.
* For example:
  * Building a file explorer, like Google Drive, where folders and files live at unknown depths.
  * Serving dynamic resources based on the path hierarchy.
  * Handling both /files (root directory) and /files/... (nested files or folders) with one component.

### ⚠️ 3. Route Conflicts with Optional Catch-all Routes

#### 📍 Example Folder Structure:

```bash
/app
├── file
│   ├── [[...slug]].js
│   └── page.js
```

### ❌ Conflict:

* If both `[[...slug]].js` and `page.js` exist under the same folder, a **routing conflict occurs**.
* Next.js throws an error because:

  * `/files` is matched by both `/files/page.js` and `/blog/[[...slug]].js`.

### ✅ Resolution:

* **Do not use `page.js` if `[[...slug]].js` is present** in the same folder.
* Instead, handle the base case (`slug === undefined`) inside `[[...slug]].js`.

### ✅ Inside `[[...slug]].js`:

```tsx
export async function getStaticProps({ params }) {
  if (!params.slug) {
    // Handle base route (/blog)
  } else {
    // Handle nested routes (/blog/a, /blog/a/b, etc.)
  }
}
```

---

## ✅ Summary Table

| Feature              | `[...slug]`         | `[[...slug]]`          |
| -------------------- | ------------------- | ---------------------- |
| Matches base route?  | ❌ `/blog` = 404     | ✅ `/blog` = matched    |
| `params.slug` value  | `['a', 'b']`        | `undefined` or array   |
| Use case             | Deep dynamic routes | Base + deep dynamic    |
| Conflict with index? | ❌                   | ✅ (with `/blog/index`) |

---

---

## 📘 NOTE : Next.js App Router — `params` and `searchParams` 

### 🔹 What are `params` and `searchParams`?

* **`params`**: Object that holds dynamic route values (e.g., `/blogs/[id]` → `{ id: '123' }`).
* **`searchParams`**: Object that holds query string values from the URL (e.g., `?q=react`).

### 🔹 How are they passed?

In **Next.js App Router (from `/app` folder)**:

* These are automatically passed into the page component.
* Example folder:

  ```
  app/
    blogs/
      [blogID]/
        page.js
  ```
* Example route:

  ```
  /blogs/123?q=react
  ```

### 🔹 What do they contain?

```js
{
  params: { blogID: '123' },
  searchParams: URLSearchParams { 'q' => 'react' }
}
```

### 🔹 Are they Promises?

✅ **Yes, in Next.js 15+**, both `params` and `searchParams` are **Promises**
You **must unwrap** them using either:

#### **Option 1: ✅ `async/await`**

```js
export default async function BlogPage(obj) {
  const params = await obj.params;
  const searchParams = await obj.searchParams;

  return (
    <div>
      Blog ID: {params.blogID}
      <br />
      Query: {searchParams.get('q')}
    </div>
  );
}
```
> ⚠️ `async/await` can only be used in Server Components — not in Client Components.

#### **Option 2: ✅ `use()` (React hook for Server Components)**

```js
import { use } from 'react';

export default function BlogPage(obj) {
  const params = use(obj.params);
  const searchParams = use(obj.searchParams);

  return (
    <div>
      Blog ID: {params.blogID}
      <br />
      Query: {searchParams.get('q')}
    </div>
  );
}
```

**❌ Common Mistake**

```js
export default function Page({ params }) {
  console.log(params.blogID); // ❌ Will be undefined if not unwrapped
}
```

> In Next.js 15+, `params` is a Promise. Direct access without `await` or `use()` will give **undefined**.


**✅ When to Use What?**

| Situation                    | Use                           |
| ---------------------------- | ----------------------------- |
| Server Component (default)   | `async` + `await` ✅           |
| Server Component (non-async) | `use()` hook ✅                |
| Client Component             | `use()` hook ✅  |

> ***Note :*** A clinent component can't be a asynchronous function. That's we need to use `use()` hook.
---


