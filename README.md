# MCGC Studio — Margaux Christie

This is a simple static portfolio site designed to be hosted for free with GitHub Pages and connected to `mcgcstudio.com`.

## You only need to edit one file

Open **content.js** to change:
- your introduction
- book titles, descriptions and your contribution
- clients
- photography text
- mixed-media text
- contact details

## Changing images

1. Put the image inside the `images` folder.
2. In `content.js`, change for example:
   `image: ""`
   to
   `image: "images/my-photo.jpg"`

You can use JPG, PNG or WebP.

For a book:
`image: "images/book-01.jpg"`

For photography:
`image: "images/photo-01.jpg"`

## Adding another book

Copy one complete book object in the `books` array, paste it underneath the existing books, and change its details.

## GitHub Pages + Namecheap

GitHub Pages is available on GitHub Free for public repositories and supports custom domains.

Basic setup:
1. Create a GitHub account.
2. Create a **public** repository, e.g. `mcgcstudio`.
3. Upload `index.html`, `style.css`, `content.js` and the `images` folder.
4. In the repository go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`.
6. Save.
7. GitHub will give you a temporary `github.io` address.
8. In Pages, enter `mcgcstudio.com` under **Custom domain**.
9. In Namecheap → Domain List → Manage → Advanced DNS, add:
   A @ → 185.199.108.153
   A @ → 185.199.109.153
   A @ → 185.199.110.153
   A @ → 185.199.111.153
   CNAME www → YOUR-GITHUB-USERNAME.github.io
10. Return to GitHub Pages and enable HTTPS when it becomes available.

DNS changes can take some time to propagate.

## Important

Do not put private information, passwords, unpublished confidential work or other sensitive material in a public GitHub repository. GitHub Pages sites are publicly accessible.

Official instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/
