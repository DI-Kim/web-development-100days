# Git

---

## Theory

- Working Directory: Current project folder
- Repository
  - Commit: code snapshot
  - Branch: where commits are stored

---

## Code

- config user account
  `git config --global user.name`
  `git config --global user.email`
- edit user account
  `git config --global user.name "<user_name>"`
  `git config --global user.email "<user_email>"`
- make alias `git config alias.<alias_name> "<make your code combination>"`
  ex) `git config alias.history "log --oneline --all --graph"`
  -> `git history` = `git log --oneline --all --graph`

<Br>

1. initialize `git init`
2. change branch name `git branch -m <name>`
3. information about current branch `git status`
4. adding staging area `git add <file_name>`
   - adding all `git add .`
5. make snapshot `git commit -m "<commit message>"`
