This is souce code for my personal website. 

* Built with HTML, SCSS, and JavaScript
* Bundled with [Parcel]('https://github.com/parcel-bundler/parcel/')
* Hosted with [Github Pages]('https://pages.github.com/')

Below are instructions for setting it up locally for development, and for publishing it live on a GitHub Pages User page.

### Setup

```bash
# Clone the repository to my-site/
git clone https://github.com/evanwinter/evanwinter.github.io my-site

# Install node modules
npm install
```

### Development

Do all development on the `develop` branch. When you're ready to publish, follow instructions in the **Production** section.

```bash
# Build and watch for changes
npm start
```

### Production

Since GitHub Pages requires "User" pages to use the `master` branch, we need to push the production-ready `dist/` folder to the `master` branch using `git subtree`.

```bash
# Step 1.
# ---
# Build the dist/ folder with Parcel
npm run build

# Step 2.
# ---
# Commit the newly built files
git add dist && git commit -m "Publishing new stuff 🤠"

# Step 3.
# ---
# Use subtree push to send it to the master branch
git subtree push --prefix dist origin master
```

Your `master` branch should only contain the built/compressed/minified files that were created by Parcel and put in the `dist/` folder during Step 1.