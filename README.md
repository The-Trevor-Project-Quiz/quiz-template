![Trevor Project Logo](/src/img/logo.svg)

# 🚀 Quick start to Local Development

1.  **Clone Repo**

    ```sh
    git clone [REPO_URL]
    ```

1.  **Start developing.**

    Navigate into your site directory, install packages and start it up.

    ```sh
    cd quiz-template
    yarn install [or] npm install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

# 🖌️ Quiz Customization

Each Quiz has the option to have it's own custom css, by targeting the quiz own `css` class, wich takes from the title of the quiz.

To begin your customization  you first need to access the specifc file where the styles of the elemnts are **`/src/scss/components/[Name_Of_Component]`**.

A quick example would be:

Accessing **`/src/scss/components/_header.scss`** to start editing the header component.

```scss
// Title of the Quiz
.without-image {
  // Setting new background-color for HeaderBar
    .main-header {
        background-color: yellow;
    }
  // Setting new background-color for HeaderBar once the Quiz has started
    .quiz-started {
        background-color: blue;
    }
}
```

_NOTE: Every `CSS` edit should be made at the end of the file since the file gets proccessed from top to bottom._

# 💫 Deploy

Once every change it's completed and the files are saved with the changes, it's time to publish them.

### First you need to stage the changes.
```sh
# Will stage every file with a saved change
git add .
# To stage an individual file
git add /src/scss/components/_header.scss
```

### Then you need to commit the changes with a message.
```sh
# Commit all of your changes on stage with a message 
git commit -m 'new css customization'
```
_NOTE: Before creating your commit you always want to make sure you have the most recent version of the code in your local._
```sh
# It's gonna pull any new change that your local doesn't have from github
git pull origin master
```

### Pushing you changes live
By pushing your commits to github, netlify will do a automated deployment to the live site, and changes will be live after the deployment it's done.
```sh
# Your commits will now be on github
git push origin master
```

# 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
