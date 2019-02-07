My website is built with HTML, SCSS, and JavaScript. I use parcel as a bundler.

### Setup

```bash
# Clone the repository to my-site/
git clone https://github.com/evanwinter/evanwinter.github.io my-site

# Install node modules
npm install
```

### Development

```bash
# Build and watch for changes
npm start
```

### Production

Since GitHub Pages requires "User" pages to use the `master` branch, we need to push the production-ready `dist/` folder to the `master` branch using `git subtree`.

```bash
# Build the dist/ folder
npm run build

# Commit the new files
git add dist && git commit -m "publishing this"

# Use subtree push to send it to the master branch.
git subtree push --prefix dist origin master
```